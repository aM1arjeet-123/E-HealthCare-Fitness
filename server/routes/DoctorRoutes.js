const express = require("express");
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointments")
const router = express.Router();
const user = require("../models/User")

// Get all doctors by specialization
router.get("/:specialization", async (req, res) => {
  try {
    const { specialization } = req.params;
    const doctors = await Doctor.find({ specialization }).populate("user","firstName lastName");
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors", error });
  }
});

// Add availability slots for a doctor
router.post("/availability/:doctorId", async (req, res) => {
    try {
      const { doctorId } = req.params;
      const { availability } = req.body; // { day, date, timeSlots }
  
      // Find the doctor by ID
      const doctor = await Doctor.findById(doctorId);
  
      // If doctor does not exist, return error
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
  
      // Add the new availability entry to the doctor's availability array
      doctor.availability.push(availability);
  
      // Save the updated doctor document
      await doctor.save();
  
      res.json({ message: "Availability updated successfully", doctor });
    } catch (error) {
      res.status(500).json({ message: "Error updating availability", error });
    }
  });

  router.get("/available-slots/:doctorId/:date", async (req, res) => {
    const { doctorId, date } = req.params;
  
    try {
      // Convert the date string to a Date object
      const parsedDate = new Date(date);
  
      // Find the doctor by doctorId
      const doctor = await Doctor.findById(doctorId);
  
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
  
      // Find availability for the doctor on the specific date
      const availability = doctor.availability.find(
        (avail) => new Date(avail.date).toDateString() === parsedDate.toDateString()
      );
  
      if (!availability) {
        return res.status(404).json({ message: "No availability for this date" });
      }
  
      // Return the available time slots
      res.json({ availableSlots: availability.timeSlots });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching available slots" });
    }
  });


  router.post("/book-appointment", async (req, res) => {
    const { patientId, doctorId, date, time } = req.body;
    console.log(patientId , doctorId , date , time)
  
    try {
      // Validate if the date is in the future
      if (new Date(date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) {
        return res.status(400).json({ message: "Appointment date must be in the future." });
      }
  
      // Find the doctor by doctorId
      const doctor = await Doctor.findById(doctorId);
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
  
      // Find the patient by patientId
      const patient = await user.findById(patientId);
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
  
      // Check if the time slot is available for the doctor on that date
      const availabilityIndex = doctor.availability.findIndex(
        (avail) => new Date(avail.date).toDateString() === new Date(date).toDateString()
      );
  
      if (availabilityIndex === -1) {
        return res.status(400).json({ message: "No availability found for the selected date." });
      }
  
      const availability = doctor.availability[availabilityIndex];
      if (!availability.timeSlots.includes(time)) {
        return res.status(400).json({ message: "Selected time slot is not available." });
      }
  
      // Check if the appointment already exists
      const existingAppointment = await Appointment.findOne({
        patient: patientId,
        doctor: doctorId,
        date: new Date(date),
        time,
      });
  
      if (existingAppointment) {
        return res.status(400).json({ message: "Appointment already exists at this time." });
      }
  
      // Create a new appointment
      const newAppointment = new Appointment({
        patient: patientId,
        doctor: doctorId,
        date: new Date(date),
        time,
        status: "Pending", // Change based on business logic
      });
  
      await newAppointment.save();
  
      // Remove the booked slot from the availability
      doctor.availability[availabilityIndex].timeSlots = doctor.availability[
        availabilityIndex
      ].timeSlots.filter((slot) => slot !== time);
  
      // Save the updated doctor document
      await doctor.save();
  
      // Respond with success and the updated list of available slots
      res.json({
        message: "Appointment booked successfully.",
        appointment: newAppointment,
        availableSlots: doctor.availability[availabilityIndex].timeSlots,
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
      res.status(500).json({ message: "Error booking appointment." });
    }
  });

  router.get("/appointments/:patientId", async (req, res) => {
    const { patientId } = req.params;
  
    try {
      const appointments = await Appointment.find({ patient: patientId })
        .populate( {   path: 'doctor', 
          select: 'specialization', 
          populate: [
              {
                  path: 'user', 
                  select: 'firstName lastName' 
              }
          ]}) // Populate doctor details if needed
        .sort({ date: 1, time: 1 }); // Sort by date and time
  
      if (appointments.length === 0) {
        return res.status(404).json({ message: "No appointments found for this patient." });
      }
  
      res.status(200).json({ appointments });
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ message: "Error fetching appointments." });
    }
  });
  router.get("/appointments-by-date/:doctorId", async (req, res) => {
    const { doctorId } = req.params;
    
    const { date } = req.query; // Pass the date as a query parameter
  console.log(date , doctorId)
    try {
      // Validate the date
      if (!date) {
        return res.status(400).json({ message: "Date is required." });
      }
  
      const appointments = await Appointment.find({
        doctor: doctorId,
        date: new Date(date), // Ensure you compare with the correct format
      })
        .populate("patient", "name ") // Populate patient details
        .sort({ time: 1 }); // Sort by time
  
      if (appointments.length === 0) {
        return res.status(404).json({ message: "No appointments found for the given date." });
      }
  
      res.status(200).json({ appointments });
    } catch (error) {
      console.error("Error fetching appointments by date:", error);
      res.status(500).json({ message: "Error fetching appointments." });
    }
  });

  
   
router.patch("/update-status/:appointmentId", async (req, res) => {
  const { appointmentId } = req.params;
  const { status } = req.body; // Expect status to be passed in the request body
  console.log(status)

  const validStatuses = ["Pending", "Confirmed", "Canceled", "Completed"];

  try {
    // Validate the status
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status provided." });
    }

    // Find the appointment by ID
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found." });
    }

    // Update the appointment status
    appointment.status = status;
    await appointment.save();

    res.status(200).json({
      message: `Appointment status updated to ${status}.`,
      appointment,
    });
  } catch (error) {
    console.error("Error updating appointment status:", error);
    res.status(500).json({ message: "Error updating appointment status." });
  }
});

  

module.exports = router;
