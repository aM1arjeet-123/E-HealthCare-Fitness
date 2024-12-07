import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Coursecard from './Coursecard';

const CourseSlider = ({ courses }) => {
  return (
    <div>
      {courses?.length ? (
        <Swiper
          slidesPerView={1} // Single slide per view for mobile
          spaceBetween={25}  // Space between slides
          loop={true}  // Enable looping
          breakpoints={{
            1024: {
              slidesPerView: 3,  // 3 slides per view for larger screens
              spaceBetween: 40,  // More space between slides for larger screens
            },
          }}
          className='min-h-[500px]'  // Adjust max height for better visibility
        >
          {courses?.map((course, index) => (
            <SwiperSlide key={index}>
              <Coursecard course={course} Height={'h-[250px]'} /> {/* Increase height of Coursecard */}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className='text-xl text-richblack-5'>No Courses Found</p>
      )}
    </div>
  );
};

export default CourseSlider;
