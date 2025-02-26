import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import copy from "copy-to-clipboard"
import {toast} from "react-hot-toast"
import {ACCOUNT_TYPE} from "../../../utils/constants"
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { addToCart } from '../../../slices/cartSlice';

const CourseDetailsCard = ({course , setConfirmationModal , handleBuyCourse}) => {
    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        thumbnail : ThumbnailImage,
        price: CurrentPrice,
        _id:courseId
    } = course;

    const handleShare = ()=>{
        copy(window.location.href);
        toast.success("Link copied to clipboard")
    }

    const handleAddToCart = ()=>{
        if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR){
            toast.error("You are an Instructor. You can't but a course")
            return
        }
        if(token){
            dispatch(addToCart(course))
            return 
        }
        setConfirmationModal({
            text1:"You are not logged in!",
            text2:"Please Login to add To cart",
            btn1Text:"Login",
            btn2Text:"Cancel",
            btn1Handler:()=>navigate("/login"),
            btn2Handler:()=>setConfirmationModal(null)
        })
    }




  return (
    <div className='flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5'>
        {/* Course Image */}

        <img
        src={ThumbnailImage}
        alt={course?.courseName}
        className='max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover
         md:max-w-full'>

         </img>
         <div className='px-4'>
            <div className='space-x-3 pb-4 text-3xl font-semibold'>
                Rs. {CurrentPrice}
            </div>
            <div className='flex flex-col gap-4'>
                {console.log("hfjkdhkfjhkd",course)}
                <button 
                 className='yellowButton'
                 onClick={
                   user?._id && Array.isArray(course?.userEnrolled)  && course?.userEnrolled.includes(user?._id)
                     ? () => navigate("/dashboard/enrolled-courses")
                     : handleBuyCourse
                 }
               >
                 {user && Array.isArray(course?.userEnrolled) && course?.userEnrolled.includes(user?._id)
                   ? "Go to Course" 
                   : "Buy Now"}
                </button>
                {(!user || (  !course?.userEnrolled.includes(user?._id))) && (
                    <button onClick={handleAddToCart} className='blackButton'>Add to Cart</button>
                )}
            </div>
            <div className='pb-3 pt-6 text-center text-sm text-richblack-25'>
                30-Day Money-Back Guarantee
            </div>
            <div>
                <p className='my-2 text-xl font-semibold'>This Course Includes:</p>
                <div className='flex flex-col gap-3 text-sm text-caribbeangreen-100'>
                    {
                        course?.instructions?.map((item,i)=>{
                            return (
                                <p className='flex gap-2 ' key={i}>
                                    <div className='mt-1'>
                                    <BsFillCaretRightFill   /></div>
                                    <span>{item}</span>
                                </p>
                            )
                        })
                    }
                </div>
            </div>
            <div className='text-center'>
                <button 
                className='mx-auto flex items-center gap-2 py-6 text-yellow-100'
                onClick={handleShare}
                ><FaShareSquare /> Share</button>
            </div>
         </div>
      
    </div>
  )
}

export default CourseDetailsCard
