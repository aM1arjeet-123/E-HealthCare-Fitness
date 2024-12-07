import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
        Have Health or Fitness Queries? We&apos;re Here to Help
      </h1>
      <p className="">
        Share your health and fitness goals or any inquiries you have. Let&apos;s work together to create a personalized plan that meets your needs.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
