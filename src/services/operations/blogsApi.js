import {toast} from "react-hot-toast"
import {apiConnector} from "../apisConnector"
import {BlogsDetails} from "../apis"
const {
    GET_ALL_BLOGS,
    CREATE_BLOG,
    LIKE_DISLIKE,
    COMMENT_ON_BLOG,
    GET_MY_BLOG

} = BlogsDetails;


export const getAllBlogs = async () =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
  
   
    try{
        const response = await apiConnector("GET" , GET_ALL_BLOGS
         )
        console.log("GET ALL BLOGS DETAILS API RESPONSE......." , response);
       result= response;
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
    }

    toast.dismiss(toastId);
    return result;
}



export const getBlogsById = async (id) =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
  
   
    try{
        const response = await apiConnector("GET" , `${GET_ALL_BLOGS}/${id}`
         )
        console.log("GET  BLOGS by Id DETAILS API RESPONSE......." , response);
       result= response;
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
    }

    toast.dismiss(toastId);
    return result;
}

export const likeAndDislike = async (id,action,token) =>{
    let result  =null;
    const toastId = toast.loading("Loading....")
  
   
    try{
    
        const response = await apiConnector("POST" , `${LIKE_DISLIKE}/${id}`,{action},{
            Authorization:`Bearer ${token}`,
        }
         )
        
        console.log("GET  BLOGS by Id DETAILS API RESPONSE......." , response);
       result= response;
       toast.success(`you ${action} the post`)
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
        toast.error("Please Login then you like and dislike")
    }
    

    toast.dismiss(toastId);
    return result;
}

export const commentOnBlog = async (id,comment,token) =>{
    const content=comment;
    let result  =null;
    const toastId = toast.loading("Loading....")
  
   
    try{
        const response = await apiConnector("POST" , `${COMMENT_ON_BLOG}/${id}`,{content},{
            Authorization:`Bearer ${token}`,
        }
         )
        console.log("GET ALL BLOGS DETAILS API RESPONSE......." , response);
       result= response;
       toast.success("Comment successful")
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
        toast.error("Please login for comment")
    }

    toast.dismiss(toastId);
    return result;
}

export const createBlog = async (data,token) =>{
 
    let result  =null;
    const toastId = toast.loading("Loading....")
    console.log(token , data)
  
   
    try{
        const response = await apiConnector("POST" , CREATE_BLOG,{data},{
            Authorization:`Bearer ${token}`,
        }
         )
        console.log("GET create BLOGS DETAILS API RESPONSE......." , response);
       result= response;
       toast.success("Blog create  successful")
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
        toast.error("Please login for create")
    }

    toast.dismiss(toastId);
    return result;
}

export const getMyBlogs = async (token) =>{
 
    let result  =null;
    const toastId = toast.loading("Loading....")


  console.log(token)
   
    try{
        const response = await apiConnector("GET" , GET_MY_BLOG,{token},{
            Authorization:`Bearer ${token}`,
        }
         )
         
        console.log("GET my BLOGS DETAILS API RESPONSE......." , response);
       result= response;
       
    } catch(err){
        console.log("error in uploading courses details ...." , err);
        result=err.response.data
        toast.error("Please login for create")
    }

    toast.dismiss(toastId);
    return result;
}