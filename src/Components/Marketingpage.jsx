import React from "react";
import { motion } from "framer-motion";
import Letter from "../Images/letter.png"; // Ensure this path is correct

// Service data with image paths
const services = [
  {
    name: "Web Design",
    image: "/images/web-design.png",
  },
  {
    name: "Email Marketing",
    image: "/images/email-marketing.png", // Ensure this file exists
  },
  {
    name: "SEO",
    image: "/images/seo.png",
  },
  {
    name: "PPC Marketing",
    image: "/images/ppc-marketing.png",
  },
  {
    name: "Social Media",
    image: "/images/social-media.png",
  },
];

const MarketingPage = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center text-white px-6">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-screen h-screen object-cover">
        <source src="/Firstvideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Marketing Section */}
      <div
        className="relative w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-6"
        style={{ backgroundImage: `url(${Letter})` }} // Fixed case-sensitive import
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

        <h2 className="text-5xl font-bold z-10 mt-[-50px]">Results-driven Marketing</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10 z-10 w-full px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-16 bg-white text-black rounded-lg text-center font-semibold transition duration-300 flex flex-col items-center"
              whileHover={{ backgroundColor: "#FFD700", scale: 1.05 }}
            >
              {/* Service Image - Handle missing images */}
              {service.image ? (
                <img src={service.image} alt={service.name} className="h-16 mb-4 object-contain" />
              ) : (
                <div className="h-16 mb-4 w-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              {/* Service Name */}
              {service.name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
