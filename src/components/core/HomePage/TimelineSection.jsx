import React from "react";
import TimeLineImage from "../../../assets/images/Ajay-1.jpg";
import Logo1 from "../../../assets/images/logo1.png";
import Logo2 from "../../../assets/images/logo2.png";
import Logo3 from "../../../assets/images/logo3.png";
import Logo4 from "../../../assets/images/logo4.png";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Consultation",
    Description: "Schedule an appointment with a doctor at your convenience.",
  },
  {
    Logo: Logo2,
    Heading: "Diagnosis",
    Description: "Get a thorough diagnosis for accurate treatment.",
  },
  {
    Logo: Logo3,
    Heading: "Treatment Plan",
    Description: "Receive a personalized treatment plan based on your needs.",
  },
  {
    Logo: Logo4,
    Heading: "Follow-up",
    Description: "Ensure continuous care with regular follow-up appointments.",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="w-[85%] m-auto flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1: Doctor Experience */}
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years of Experience
              </h1>
            </div>

            {/* Section 2: Number of Doctors */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">50+</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Doctors Available
              </h1>
            </div>
          </div>
          <img
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
