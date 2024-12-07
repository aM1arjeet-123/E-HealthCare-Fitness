const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User");

exports.auth = async (req, res, next)=>{
    try{
        //fetch the token
        const token = 
        req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer " , "");
        
        if(!token){
            return res.status(401).json({
                success:true,
                message:"Token is missing"
            })
        }
        try{
            //verify the token using JWT secret key
            console.log(token)
            const decode = await jwt.verify(token , process.env.JWT_SECRET);
            
            //store the decode Jwt value into user

            req.user  = decode;
            console.log(req.user)


        }
        catch(err){
            return res.status(401).json({
                success:false,
                message:"Failed in tiken verification"
            })
        }
        next();


    }catch(err){
        return res.status(401).json({
            success:false,
            message:"Something wrong in validation of token"
        })
    }
};

exports.isPatient = async (req,res,next)=>{
    try{
        const userDetails = await User.findOne({email:req.user.email});
        if(userDetails.accountType !== "Patient"){
            return res.status(401).json({
                success:false,
                message:"This is a protected for patient account"
            });


        }
        next();
    } catch(err){
        return res.status(500).json({
            success:false,
            message:"User Role is not verified"
        });
    }
}

exports.isAdmin = async (req,res,next)=>{
    try{
        const userDetails = await User.findOne({email:req.user.email});
        if(userDetails.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected routes for Admin"
            })
        }
        next();
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Fail in user role verification"
        })
    }
}

exports.isDoctor = async (req,res,next)=>{
    try{
        const userDetails = await User.findOne({email:req.user.email});
        if(userDetails.accountType !== "Doctor"){
            return res.status(401).json({
                success:false,
                message:"This is protected routes for Doctor"
            })
        }
        next();
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Fail in user role verification"
        })
    }
}

exports.isInstructor = async (req,res,next)=>{
    try{
        const userDetails = await User.findOne({email:req.user.email});
        if(userDetails.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is protected routes for Instructor"
            })
        }
        next();
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Fail in user role verification"
        })
    }
}