import React from 'react'
import BannerImage1 from "../assets/images/aboutus1.jpg"
import BannerImage2 from "../assets/images/aboutus2.webp"
import BannerImage3 from "../assets/images/aboutus3.jpg"
import HighlightText from "../components/core/HomePage/HighlightText"
import Quote from "../components/core/AboutPage/Quote"
import FoundingStory from "../assets/images/istockphoto-1477483038-612x612.jpg"
import StatsComponent from '../components/core/AboutPage/StatsPage'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from "../components/common/Footer"
import ReviewSlider from '../components/common/ReviewSlider'

const About = () => {
  return (
    <div>
        <section className="bg-richblack-700">
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
        <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
          Driving Innovation in E-healthcare & Fitness for a
          <HighlightText text={"Healthier Future"} />
          <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            At E-healthcare and Fitness Center, we are committed to promoting a
            healthier future. We provide cutting-edge healthcare services, fitness
            programs, and wellness education, helping you lead a more fulfilling and 
            active life.
          </p>
        </header>
        <div className="sm:h-[70px] lg:h-[150px]"></div>
        <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
          <img src={BannerImage1} alt="Fitness Program" />
          <img src={BannerImage2} alt="Health Monitoring" />
          <img src={BannerImage3} alt="Wellness Education" />
        </div>
      </div>
    </section>
    <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>
      <section>
  <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
      <div className="my-24 flex lg:w-[50%] flex-col gap-10">
        <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
          Our Founding Story
        </h1>
        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
          Our healthcare and fitness platform was born out of a shared passion for promoting well-being and transforming the way people approach health. It all began with a group of healthcare professionals, fitness experts, and technology enthusiasts who recognized the need for accessible, personalized, and high-quality fitness and wellness services in today's digital world.
        </p>
        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
          As experienced fitness trainers and healthcare providers, we saw the challenges many people face in accessing the right guidance and support. We believed that health should not be restricted to physical spaces, and wellness should be accessible to everyone, anywhere. We envisioned a platform that would bridge these gaps, allowing people to take control of their health and fitness from the comfort of their homes.
        </p>
      </div>

      <div>
        <img
          src={FoundingStory} // Replace with your actual image URL
          alt="Founding Story"
          className="shadow-[0_0_20px_0] shadow-[#FC6767]"
        />
      </div>
    </div>

    <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
      <div className="my-24 flex lg:w-[40%] flex-col gap-10">
        <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
          Our Vision
        </h1>
        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
          With our vision in mind, we set out to create a healthcare and fitness platform that redefines the way people take care of their bodies. Our team of health and fitness experts worked tirelessly to develop a comprehensive platform that combines state-of-the-art technology with personalized wellness plans, fostering an environment where users can improve their health, fitness, and overall well-being.
        </p>
      </div>
      <div className="my-24 flex lg:w-[40%] flex-col gap-10">
        <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%]">
          Our Mission
        </h1>
        <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
          Our mission goes beyond just offering fitness and health services. We aim to build a community where individuals can connect, motivate each other, and work together towards a healthier lifestyle. We believe that health is best achieved through collaboration, support, and shared experiences, which is why we provide a platform for users to engage with trainers, doctors, and peers through live sessions, consultations, and wellness forums.
        </p>
      </div>
    </div>
  </div>
</section>
<StatsComponent/>

<section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider/>
     
      </div>
      <Footer />
      
    </div>
  )
}

export default About
