const mongoose = require("mongoose");
const Doctor = require("../models/Doctor"); // Assuming Doctor is the model

// This function will delete the expired availability
const removeExpiredAvailability = async () => {
  try {
    const currentDate = new Date();

    // Find doctors with availability data
    const doctors = await Doctor.find({ "availability.date": { $lt: currentDate } });

    doctors.forEach(async (doctor) => {
      const updatedAvailability = doctor.availability.filter((item) => {
        // Keep the availability if the date is in the future
        return item.date >= currentDate;
      });

      doctor.availability = updatedAvailability;
      await doctor.save(); // Save the updated availability list
    });

    console.log("Expired availability data removed successfully.");
  } catch (error) {
    console.error("Error removing expired availability:", error);
  }
};

// Schedule this function to run periodically (e.g., every 24 hours)
setInterval(removeExpiredAvailability, 24 * 60 * 60 * 1000); // Run every 24 hours

module.exports = removeExpiredAvailability;