// const User = require("../models/User");
// const Doctor = require("../models/Doctor");

// exports.getAllDoctors = async (req,res)=>{
//     try {
//         const doctors = await Doctor.find().populate('user');
//         return res.status(500).json({
//             success:true,
//             doctors
//         })
//       } catch (error) {
//         res.status(500).json({ message: "Error fetching doctors", error });
//       }
// }