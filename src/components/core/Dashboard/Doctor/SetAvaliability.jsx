import React, { useState } from "react";
import { setAvaliabilitys } from "../../../../services/operations/doctorApi";
import { useSelector } from "react-redux";

const SetAvailability = () => {
  const { user } = useSelector((state) => state.profile);
  const doctorId = user.doctorProfile;

  const [day, setDay] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [newTimeSlot, setNewTimeSlot] = useState("");
  const [message, setMessage] = useState("");

  const handleAddTimeSlot = () => {
    if (newTimeSlot) {
      setTimeSlots([...timeSlots, newTimeSlot]);
      setNewTimeSlot("");
    }
  };

  const handleDeleteTimeSlot = (index) => {
    const updatedSlots = timeSlots.filter((_, i) => i !== index);
    setTimeSlots(updatedSlots);
  };

  const handleSubmit = async () => {
    const availability = {
      day,
      date: new Date(availabilityDate), // Store the selected date
      timeSlots,
    };

    try {
      const response = await setAvaliabilitys(doctorId, availability);
      setMessage(response.data.message);

      // Reset the form after successful submission
      setDay("");
      setAvailabilityDate("");
      setTimeSlots([]);
      setNewTimeSlot("");
    } catch (error) {
      setMessage("Error updating availability");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Set Availability for Doctor
      </h2>

      {/* Select Day */}
      <div className="mb-4">
        <label htmlFor="day" className="block text-lg font-medium text-gray-600">
          Day
        </label>
        <input
          type="text"
          id="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Day (e.g., Monday)"
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      {/* Select Date */}
      <div className="mb-4">
        <label htmlFor="availabilityDate" className="block text-lg font-medium text-gray-600">
          Select Date
        </label>
        <input
          type="date"
          id="availabilityDate"
          value={availabilityDate}
          onChange={(e) => setAvailabilityDate(e.target.value)}
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      {/* Time Slot Input */}
      <div className="mb-4">
        <label htmlFor="timeSlot" className="block text-lg font-medium text-gray-600">
          Add Time Slot
        </label>
        <div className="flex items-center mt-2">
          <input
            type="text"
            id="timeSlot"
            value={newTimeSlot}
            onChange={(e) => setNewTimeSlot(e.target.value)}
            placeholder="Time Slot (e.g., 9:00 AM - 10:00 AM)"
            className="w-full p-3 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-indigo-600"
          />
          <button
            onClick={handleAddTimeSlot}
            className="ml-2 px-4 py-3 text-richblack-800 bg-yellow-200 font-semibold rounded-r-md hover:bg-yellow-500 focus:outline-none"
          >
            Add
          </button>
        </div>
      </div>

      {/* Time Slot List */}
      {timeSlots.length > 0 && (
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-600">Time Slots</label>
          <ul className="mt-2">
            {timeSlots.map((slot, index) => (
              <li key={index} className="flex justify-between items-center text-gray-700">
                <span>{slot}</span>
                <button
                  onClick={() => handleDeleteTimeSlot(index)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit Availability */}
      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="w-full py-3 text-richblack-800 bg-yellow-200 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none"
        >
          Save Availability
        </button>
      </div>

      {/* Message */}
      {message && <p className="mt-4 text-center text-lg text-gray-700">{message}</p>}
    </div>
  );
};

export default SetAvailability;
