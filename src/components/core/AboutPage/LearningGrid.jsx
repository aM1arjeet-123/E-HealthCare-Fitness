import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Fitness Programs for",
    highliteText: "Anyone, Anywhere",
    description:
      "Our platform partners with leading health experts, fitness trainers, and wellness organizations to bring flexible, accessible, and affordable fitness programs to individuals worldwide.",
    BtnText: "Explore Programs",
    BtnLink: "/fitness-programs",
  },
  {
    order: 1,
    heading: "Tailored Fitness Plans Based on Your Goals",
    description:
      "Save time and effort! Our fitness plans are customized to meet your specific fitness goals, whether it's weight loss, muscle gain, or overall health improvement.",
  },
  {
    order: 2,
    heading: "Holistic Health Approach",
    description:
      "We combine fitness, nutrition, and mental wellness to create a holistic approach that ensures sustainable and long-term health improvements.",
  },
  {
    order: 3,
    heading: "Certified Trainers and Experts",
    description:
      "Our platform offers access to certified fitness trainers and health experts who are committed to helping you reach your health and wellness goals.",
  },
  {
    order: 4,
    heading: "Progress Tracking & Auto-Feedback",
    description:
      "Track your progress with our integrated system that automatically provides feedback on your fitness journey, helping you stay on track and make improvements.",
  },

  {
    order: 5,
    heading: "Book Appointments with Doctors",
    description:
      "Patients can easily schedule appointments with certified doctors for consultations, health checkups, or personalized treatment plans, all through our platform.",
 
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
