import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/images/7579331-uhd_4096_2160_25fps.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlock"
import AppointmentBook from "../assets/images/9057559-uhd_3840_2160_25fps.mp4"
import CourseVideo from "../assets/images/3209241-uhd_3840_2160_25fps.mp4"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"

const home = () => {
  return (
    <div>
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
  {/* Become an Instructor Button */}
  <Link to={"/signup"}>
    <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
      <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
        <p>Become a Patient / Health Instructor</p>
        <FaArrowRight />
      </div>
    </div>
  </Link>
   {/* Heading */}
   <div className="text-center text-4xl font-semibold">
    Empower Your Life with
    <HighlightText text={"Healthy Choices"} />
  </div>
   {/* Sub Heading */}
   <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
    With our healthcare and fitness platform, you can achieve your health goals
    at your own pace. Get access to expert advice, interactive resources, and personalized guidance to lead a healthier life.
  </div>
    {/* CTA Buttons */}
    <div className="mt-8 flex flex-row gap-7">
    <CTAButton active={true} linkto={"/signup"}>
      Learn More
    </CTAButton>

    <CTAButton active={false} linkto={"/login"}>
      Book a Consultation
    </CTAButton>
  </div>
        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
        {/* Section 2 */}
        <div>
  <CodeBlocks
    position={"lg:flex-row"}
    heading={
      <div className="text-4xl font-semibold">
        Book Your
        <HighlightText text={"Doctor's Appointment"} /> with ease.
      </div>
    }
    subheading={
      "Our platform connects you with certified healthcare professionals, offering personalized care and consultations to ensure your well-being. Schedule your appointment today!"
    }
    ctabtn1={{
      btnText: "Book Now",
      link: "/appointment",
      active: true,
    }}
    ctabtn2={{
      btnText: "Learn More",
      link: "/services",
      active: false,
    }}
    Images={AppointmentBook}
   />
</div>

{/* section 3 */}

<div>
  <CodeBlocks
    position={"lg:flex-row-reverse"}
    heading={
      <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
        Start Your Journey with 
        <HighlightText text={"Yoga and Fitness"} />
      </div>
    }
    subheading={
      "Take the first step towards a healthier lifestyle. Watch our expert-led yoga and fitness videos to improve your physical and mental well-being."
    }
    ctabtn1={{
      btnText: "Watch Video",
      link: "/courses",
      active: true,
    }}
    ctabtn2={{
      btnText: "Learn More",
      link: "/services",
      active: false,
    }}
    Images={CourseVideo}
    
/>
</div>







  </div>
  <div className="bg-pure-greys-5 text-richblack-700 mb-10">
  <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
  {/* Expert Guidance - Section 1 */}
  <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
    <div className="text-4xl font-semibold lg:w-[45%] ">
      Achieve a healthier lifestyle with{" "}
      <HighlightText text={"expert guidance."} />
    </div>
    <div className="flex flex-col items-start gap-10 lg:w-[40%]">
      <div className="text-[16px]">
        Your health and wellness journey deserves the best support. Access 
        personalized consultations, tailored fitness plans, and expert advice 
        to meet your goals.
      </div>
      <CTAButton active={true} linkto={"/signup"}>
        <div className="">Learn More</div>
      </CTAButton>
    </div>
  </div>
</div>
<TimelineSection/>
<LearningLanguageSection/>




    </div>
    <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider/>
     
      </div>
      <Footer/>



      
    </div>
  )
}

export default home
