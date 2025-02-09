import React from "react";
import { motion } from "framer-motion";

const MarketingPage = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center text-white px-6">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-screen h-screen object-cover">
        <source src="/path-to-your-video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Marketing Section */}
      <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-6"
        style={{ backgroundImage: "url('/path-to-marketing-image.jpg')" }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <h2 className="text-5xl font-bold z-10 mt-[-50px]">Results-driven Marketing</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10 z-10 w-full">
          {['Web Design', 'Email Marketing', 'SEO', 'PPC Marketing', 'Social Media'].map((service, index) => (
            <motion.div 
              key={index}
              className="p-10 bg-white text-black rounded-lg text-center font-semibold transition duration-300"
              whileHover={{ backgroundColor: '#FFD700', scale: 1.05 }}
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
