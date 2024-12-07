import React, { useState, useEffect } from "react";



// Import the specialization data
import { specializations } from "../../../data/specialization-data";
import { getDoctor } from "../../../services/operations/doctorApi";
import { useNavigate } from "react-router-dom";



const DoctorAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [specialization, setSpecialization] = useState(""); // Stores the selected specialization
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // For error handling
  const navigate = useNavigate();

  // Fetch doctors by specialization
  const loadDoctors = async (specialization) => {
    setLoading(true);
    try {
      const response = await getDoctor(specialization);
      setDoctors(response.data); // Set the fetched doctors to state
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("Error fetching doctors.");
    } finally {
      setLoading(false); // Stop loading once the request is done
    }
  };

  // Render the specialization buttons
  const renderSpecializations = () => {
    return specializations.map((item) => (
      <button
        key={item.specialization}
        onClick={() => handleSpecializationClick(item.specialization)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
      >
        {item.specialization}
      </button>
    ));
  };

  // Handle when a specialization is clicked
  const handleSpecializationClick = (specialization) => {
    setSpecialization(specialization);
    loadDoctors(specialization); // Fetch doctors when a specialization is selected
  };
  const handleAppointment = (doctorId) => {
    // Navigate to the BookAppointmentPage and pass the doctorId
    navigate(`/book-appointment/${doctorId}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-richblack-50">Find Doctors by Specialization</h2>

      {/* Render Specialization Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {renderSpecializations()}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Loading Indicator */}
      {loading ? (
        <p className="text-center text-gray-500">Loading doctors...</p>
      ) : (
        <div>
          {console.log(doctors)}
          {doctors.length === 0 ? (
            <p className="text-center text-gray-500 text-richblack-50">No doctors found for the selected specialization.</p>
          ) : (
            doctors.map((doctor) => (
              <div key={doctor._id} className="doctor-card bg-white p-6 rounded-lg shadow-md mb-6">
                {console.log(doctor)}
                <h3 className="text-xl font-semibold mb-2">{doctor.user.firstName} {doctor.user.lastName}</h3>
                <p className="text-gray-600 mb-2">Specialization: {doctor.specialization}</p>
                <p className="text-gray-600 mb-2">Experience: {doctor.experience} years</p>
                <p className="text-gray-600 mb-4">Rating: {doctor.rating} / 5</p>
                <button
                  onClick={() => handleAppointment(doctor._id)}
                  className="px-6 py-2 bg-yellow-200 text-richblack-700 rounded-md hover:bg-green-600 transition duration-200"
                >
                  Book Appointment
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default DoctorAppointment
