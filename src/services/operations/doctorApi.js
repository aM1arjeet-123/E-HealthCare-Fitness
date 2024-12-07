import {toast} from "react-hot-toast"
import {apiConnector} from "../apisConnector"
import {DoctorRelated} from "../apis"
const {
    GET_DOCTOR_BY_SPECIAL,
    SET_AVALIABILITY,
    AVAILABLE_SLOT,
    APPOINTMENT_SLOT,
    ALL_APPOINTMENT_BY_PATIENT,
    ALL_APPOINTMENT_BY_DOCTOR,
    STATUS_APL
  

} = DoctorRelated;


export const getDoctor = async (specialization) =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
  
   
    try{
        const response = await apiConnector("GET" , `${GET_DOCTOR_BY_SPECIAL}/${specialization}`
         )
        console.log("GET Doctor DETAILS API RESPONSE......." , response);
       result= response;
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
    }

    toast.dismiss(toastId);
    return result;
}

export const setAvaliabilitys = async (doctorId, availability) =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
  
   
    try{
        const response = await apiConnector("POST" , `${SET_AVALIABILITY}/${doctorId}`,
            {availability}
         )
        console.log("SET Doctor avaliabilty DETAILS API RESPONSE......." , response);
       result= response;
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
    }

    toast.dismiss(toastId);
    return result;
}

export const avilableSlots = async (doctorId, appointmentDate) =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
  
   
    try{
        const response = await apiConnector("GET" , `${AVAILABLE_SLOT}/${doctorId}/${appointmentDate}`,
           
         )
        console.log("SET Doctor avaliabilty DETAILS API RESPONSE......." , response);
       result= response;
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
    }

    toast.dismiss(toastId);
    return result;
}

export const appointmentSlots = async (patientId , doctorId , appointmentDate, selectedSlot) =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
 
  
   
    try{
        const response = await apiConnector("POST" , APPOINTMENT_SLOT,
            {
                patientId,
                doctorId,
                date:appointmentDate,
                time:selectedSlot
            },
            {
                "Content-Type": "application/json",
            }
           
         )
        console.log(" avaliabilty DETAILS API RESPONSE......." , response);
       result= response;
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
    }

    toast.dismiss(toastId);
    return result;
}

export const getAllAppointmentBookingDoctor = async (doctorId , selectedDate) =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
   const date=selectedDate;
   
    try{
        const response = await apiConnector("GET" , `${ALL_APPOINTMENT_BY_DOCTOR}/${doctorId}?date=${encodeURIComponent(selectedDate)}`
           
         )
        console.log(" avaliabilty DETAILS API RESPONSE......." , response);
       result= response;
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
    }

    toast.dismiss(toastId);
    return result;
}

export const getAllAppointmentBooking = async (patientId) =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
    
    
 
  
   
    try{
        const response = await apiConnector("GET" , `${ALL_APPOINTMENT_BY_PATIENT}/${patientId}`,
       
           
         )
        console.log(" avaliabilty DETAILS API RESPONSE......." , response);
       result= response;
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
    }

    toast.dismiss(toastId);
    return result;
}

export const changeStatus = async (appointmentId , newStatus) =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
    
    
 
  
   
    try{
        const response = await apiConnector("PATCH" , `${STATUS_APL}/${appointmentId}`,
            {
                status:newStatus
            }
       
           
         )
        console.log(" avaliabilty DETAILS API RESPONSE......." , response);
       result= response;
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
    }

    toast.dismiss(toastId);
    return result;
}


