import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/images/image1.gif";
import Compare_with_others from "../../../assets/images/image2.gif";
import Plan_your_lessons from "../../../assets/images/image3.gif";

const FitnessProgressSection = () => {
  return (
    <div>
      <div className="text-4xl font-semibold text-center my-10 ">
        Your Path to
        <HighlightText text={"Improved Health and Fitness"} />
        <div className="text-center text-richblack-700 font-medium  mb-14 lg:w-[75%] mx-auto leading-6 text-base mt-3">
          Using our personalized fitness tools, tracking progress, creating a custom workout schedule, and more to help you achieve your fitness goals.
        </div>
        <div className="flex w-[80%] m-auto flex-col gap-5  lg:flex-row lg:w-[80%] items-center justify-center mt-20 lg:mt-0">
          <img
            src={Know_your_progress}
            alt="Know your progress"
            className="object-contain w-[50%] h-[80%] lg:-mr-24"
          />
          <img
            src={Compare_with_others}
            alt="Compare with others"
            className="object-contain w-[36%] lg:-mb-10 lg:-mt-0 -mt-12"
          />
          <img
            src={Plan_your_lessons}
            alt="Plan your lessons"
            className="object-contain w-[36%] lg:-ml-24 lg:-mt-5 -mt-16"
          />
        </div>
      </div>

      <div className="w-fit mx-auto mb-8 ">
        <CTAButton active={true} linkto={"/signup"} className="mb-14">
          <div className="">Start Your Fitness Journey</div>
        </CTAButton>
      </div>
    </div>
  )
}

export default FitnessProgressSection
