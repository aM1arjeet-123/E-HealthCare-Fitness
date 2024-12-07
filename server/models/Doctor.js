const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true, 
    unique: true 
  }, // Reference to User (Doctor)
  specialization: { 
    type: String, 
    required: true 
  }, // Doctor's specialization
  experience: { 
    type: Number, 
    required: true 
  }, // Years of experience
  availability: [
     {
          day: { type: String }, // Example: 'Monday', 'Tuesday'
          date: { type: Date },  // Date for the specific availability
          timeSlots: { type: [String]}, // Example: ['10:00-11:00', '14:00-15:00']
        }
  ],
  bio: { 
    type: String 
  }, // Doctor's bio
  rating: { 
    type: Number, 
    default: 0,
    min: 0, 
    max: 5 
  }, // Rating between 0 and 5
  fees: { 
    type: Number, 
   
  }, // Appointment fees
  isAvailable: { 
    type: Boolean, 
    default: true 
  } // Doctor's availability status
}, 
{
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model("Doctor", doctorSchema);
