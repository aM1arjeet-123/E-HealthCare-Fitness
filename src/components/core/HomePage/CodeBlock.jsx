import React from "react";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import AppointmentBook from "../../../assets/images/9057559-uhd_3840_2160_25fps.mp4"

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  Images
}) => {
  return (
  
    <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}>


      {/* Section 1  */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        {heading}

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-fit code-border flex flex-row  rounded-md sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
       

        {/* Codes */}
        <div
          className={`w-[100%] rounded-lg `}
        >
            <div className=" shadow-[10px_-5px_50px_-5px] shadow-blue-200">
            <video
           
            muted
            loop
            autoPlay
          >
            <source src={Images} type="video/mp4" />
          </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
