import React, { useState } from "react";

import { useSelector } from "react-redux";
import { changeStatus } from "../../../../services/operations/doctorApi";
import { getAllAppointmentBookingDoctor } from "../../../../services/operations/doctorApi";

const MyAppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.profile); // Assuming doctor details are in Redux

  const fetchAppointments = async () => {
    if (!selectedDate) {
      setError("Please select a date.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await getAllAppointmentBookingDoctor(user.doctorProfile, selectedDate)

      setAppointments(response.data.appointments);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching appointments.");
      setLoading(false);
    }
  };

  const updateStatus = async (appointmentId, newStatus) => {
    try {
      const response = await changeStatus(appointmentId , newStatus);

      const updatedAppointment = response.data.appointment;

      // Update the local state with the updated appointment
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === updatedAppointment._id ? updatedAppointment : appointment
        )
      );
    } catch (err) {
      console.error("Error updating appointment status:", err);
      alert(err.response?.data?.message || "Error updating appointment status.");
    }
  };

  return (
    <div className="bg-richblack-700 rounded-xl border-1 border-black p-4">
      <h2 className="text-richblack-50 text-3xl mb-4">Today's Appointments</h2>

      <div className="mb-4">
        <label className="block text-richblack-50 text-lg mb-2" htmlFor="date">
          Select Date:
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 rounded-md border"
        />
        <button
          onClick={fetchAppointments}
          className="ml-4 p-2 bg-green-500 text-white rounded-md"
        >
          Fetch Appointments
        </button>
      </div>

      {loading ? (
        <p>Loading appointments...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        appointments.length > 0 && (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment._id} className="p-4 bg-richblack-100 rounded-md">
                <p>
                  <span className="font-bold">Patient:</span> {appointment.patient.name}, Age: {appointment.patient.age}
                </p>
                <p>
                  <span className="font-bold">Date:</span> {new Date(appointment.date).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-bold">Time:</span> {appointment.time}
                </p>
                <p>
                  <span className="font-bold">Status:</span> {appointment.status}
                </p>

                {appointment.status === "Pending" && (
                  <button
                    onClick={() => updateStatus(appointment._id, "Confirmed")}
                    className="mt-2 p-2 bg-blue-500 text-white rounded-md"
                  >
                    Confirm Appointment
                  </button>
                )}
                {appointment.status === "Confirmed" && (
                  <button
                    onClick={() => updateStatus(appointment._id, "Completed")}
                    className="mt-2 p-2 bg-green-500 text-white rounded-md"
                  >
                    Mark as Completed
                  </button>
                )}
                {appointment.status !== "Canceled" && (
                  <button
                    onClick={() => updateStatus(appointment._id, "Canceled")}
                    className="mt-2 p-2 bg-red-500 text-white rounded-md"
                  >
                    Cancel Appointment
                  </button>
                )}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default MyAppointmentList;
