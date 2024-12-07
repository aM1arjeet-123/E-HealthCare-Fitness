import React, { useEffect, useState } from "react";
import { getAllAppointmentBooking } from "../../../services/operations/doctorApi";
import { useSelector } from "react-redux";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.profile); // Assuming you store user data in Redux

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
      
        const response = await getAllAppointmentBooking(user._id);
        setAppointments(response.data.appointments);
        setLoading(false);
      } catch (err) {
      
        setError(err.response?.data?.message || "Error fetching appointments.");
        setLoading(false);
      }
    };

    if (user?._id) {
      fetchAppointments();
    }
  }, [user]);

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  if (error) {
    return <div className="text-richblack-50">{error}</div>;
  }

  return (
    <div className="bg-richblack-700 rounded-xl border-1 border-black p-4">
      <h2 className="text-richblack-50 text-3xl mb-4">My Appointments</h2>

      {appointments.length > 0 ? (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment._id} className="p-4 bg-richblack-100 rounded-md">
              <p>
                {console.log(appointment)}
                <span className="font-bold">Doctor:</span> {appointment.doctor.user.firstName} {appointment.doctor.user.lastName}({appointment.doctor.specialization
                })
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
            </div>
          ))}
        </div>
      ) : (
        <p className="text-pink-300 text-xl">No appointments found.</p>
      )}
    </div>
  );
};

export default MyAppointment;
