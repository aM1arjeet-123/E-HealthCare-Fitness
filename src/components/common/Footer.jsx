import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/imageData/Logo-removebg-preview.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// Footer Link Data
export const FooterLink2 = [
  {
    title: "Subjects",
    links: [
      { title: "Healthcare", link: "/healthcare" },
      { title: "Fitness", link: "/fitness" },
      { title: "Yoga", link: "/yoga" },
      { title: "Nutrition", link: "/nutrition" },
    ],
  },
  {
    title: "Plans",
    links: [
      { title: "Fitness Memberships", link: "/fitness-membership" },
      { title: "Corporate Wellness", link: "/corporate-wellness" },
      { title: "Personal Training", link: "/personal-training" },
    ],
  },
  {
    title: "Career Building",
    links: [
      { title: "Careers in Healthcare", link: "/careers-healthcare" },
      { title: "Fitness Careers", link: "/careers-fitness" },
      { title: "Health Certification", link: "/health-certification" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-richblack-800 py-8">
      <div className="max-w-maxContent mx-auto text-richblack-400 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Logo and Social Media Icons */}
        <div className="flex flex-col items-center lg:items-start">
          <img src={Logo} alt="E-healthcare & Fitness Logo" className="object-contain w-40" />
          <div className="flex gap-3 text-lg mt-3">
            <FaFacebook />
            <FaGoogle />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Important Links */}
        <div className="flex gap-8">
          {/* Dynamic Links from FooterLink2 */}
          {FooterLink2.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-white font-semibold">{section.title}</h3>
              {section.links.map((link, i) => (
                <Link key={i} to={link.link} className="text-sm hover:text-white mt-2">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Legal & Privacy */}
        <div className="text-center text-sm mt-5 lg:mt-0">
          <Link to="/privacy" className="text-sm hover:text-white">Privacy Policy</Link> | 
          <Link to="/terms" className="text-sm hover:text-white"> Terms of Service</Link>
        </div>
      </div>

      <div className="text-center text-sm text-richblack-500 mt-5">
        <p>© 2024 E-healthcare & Fitness Center. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
