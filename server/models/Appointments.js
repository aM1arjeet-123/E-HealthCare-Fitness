const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true 
  }, // Reference to Patient
  doctor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Doctor', 
    required: true 
  }, // Reference to Doctor
  date: {
    type: Date, 
    required: true,
    validate: {
      validator: (value) => value >= new Date(),
      message: "Appointment date must be in the future.",
    }
  },
  time: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Pending', 'Confirmed', 'Canceled', 'Completed'], 
    default: 'Pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
}, 
{
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create a unique index for appointments (patient, doctor, date, time)
AppointmentSchema.index({ patient: 1, doctor: 1, date: 1, time: 1 }, { unique: true });

module.exports = mongoose.model("Appointment", AppointmentSchema);
