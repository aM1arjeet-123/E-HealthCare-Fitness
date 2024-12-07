const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        required:true,
        enum:['Patient', 'Instructor', 'Doctor', 'Admin']
    },
    
    active:{
        type:Boolean,
        default:true,

    },
    approved:{
        type:Boolean,
        default:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile"
    },
    course:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }],
    token:{
        type:String,

    },
    resetPasswordExpires:{
        type:Date,
    },
    image:{
        type:String,
    },
    courseProgress:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseProgress"
    }],
    doctorProfile: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Doctor' },
},
// add timeStapms for when the documented is created and last modified
{
    timestamps:true
}


)

module.exports = mongoose.model("user" , userSchema);