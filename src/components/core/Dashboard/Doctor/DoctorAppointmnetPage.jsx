import React, { useState, useEffect } from "react";
import { avilableSlots } from "../../../../services/operations/doctorApi"; // Function import
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { appointmentSlots } from "../../../../services/operations/doctorApi";



const DoctorAppointmentPage = () => {
  const { doctorId } = useParams(); // Destructure doctorId from the useParams hook
  const [slots, setSlots] = useState([]); // Rename the state variable to 'slots'
  const [selectedSlot, setSelectedSlot] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [error, setError] = useState("");
  const {user}=useSelector((state)=>state.profile);

  // Function to fetch available slots whenever the date or doctorId changes
  useEffect(() => {
    if (doctorId && appointmentDate) {
      // Fetch available slots based on doctorId and selected date
      const fetchSlots = async () => {
        try {
          const response = await avilableSlots(doctorId, appointmentDate);
          if (response.data.availableSlots.length > 0) {
            setSlots(response.data.availableSlots); // Set slots only if available
          } else {
            setSlots([]); // If no slots are available, clear the slots
            setError("No available slots for the selected date.");
          }
        } catch (err) {
          setSlots([]); // Clear slots in case of error
          setError("No available slots.");
        }
      };

      fetchSlots();
    }
  }, [doctorId, appointmentDate]); // Re-fetch slots when doctorId or appointmentDate changes

  const  handleBookAppointment = async () => {
    if (!selectedSlot) {
      setError("Please select a time slot");
      return;
    }
    const patientId = user._id; // Replace with actual patient ID
try{
    const response = await appointmentSlots(
        patientId,
        doctorId,
        appointmentDate,
         selectedSlot,
    )
    console.log(response)

    setSlots(response.data.availableSlots);
  } catch(err){
         return ;
  }

      
        // Update the available slots after booking
       
      

    // Add your booking logic here
  };

  return (
    <div className="bg-richblack-700 rounded-xl border-1 border-black p-4">
      <h2 className="text-richblack-50 text-3xl mb-4">Book Appointment</h2>

      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        className="mb-4 px-4 py-2 border rounded-md w-full"
      />

      {/* Show available slots if they exist, else show error */}
      {slots.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {slots.map((slot) => (
            <div
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`p-4 text-center rounded-md cursor-pointer transition duration-200 ${
                selectedSlot === slot ? "bg-pink-300 text-white" : "bg-richblack-100 font-bold"
              }`}
            >
              {slot}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-pink-300 text-xl">{error}</p>
      )}

      <button
        onClick={handleBookAppointment}
        className="px-6 mt-10 py-2 bg-yellow-200 text-richblack-900 rounded-md hover:bg-green-600 transition duration-200"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorAppointmentPage;
