import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/images/Instructor.png";
import HighlightText from './HighlightText';
import DoctorImage from "../../../assets/images/DoctorImage.jpg"


const FitnessInstructorSection = () => {
  return (
    <div className='flex flex-col gap-24'>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-[50%]">
            <img
              src={Instructor}
              alt="Fitness Instructor"
              className="shadow-white shadow-[-20px_-20px_0_0]"
            />
          </div>
          <div className="lg:w-[50%] flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl font-semibold ">
              Become a
              <HighlightText text={"fitness instructor"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
              Fitness instructors from around the world are shaping the health
              and fitness journey of millions. We provide the tools and
              resources to teach fitness and wellness to others.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="lg:w-[50%]">
            <img
              src={DoctorImage}
              alt="Doctor"
              className="shadow-white shadow-[-20px_-20px_0_0]"
            />
          </div>
          <div className="lg:w-[50%] flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl font-semibold ">
              Become a
              <HighlightText text={"doctor"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
              Doctors from around the world provide essential medical care and
              guidance. Join our platform and help people by offering expert
              consultations and healthcare services.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Start Your Medical Practice Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FitnessInstructorSection
