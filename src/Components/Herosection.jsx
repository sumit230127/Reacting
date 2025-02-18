import React from "react";
import { motion } from "framer-motion";
import Firstvideo from "../Images/Firstvideo.mp4"

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center text-white px-6">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-screen h-screen object-cover">
        <source src={Firstvideo} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white z-10">
        <div className="text-2xl font-bold text-yellow-500">smart<span className="text-white">sites</span></div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Our Work</a>
          <a href="#" className="hover:underline">Company</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <div className="text-yellow-500 font-bold">201-870-6000</div>
      </nav>
      
      {/* Hero Content */}
      <div className="text-center mt-20 z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {"Award Winning".split("").map((char, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {"Digital Marketing Agency".split("").map((char, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {"We are passionate about Google!".split("").map((char, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      
      {/* Form */}
      <div className="bg-black bg-opacity-70 p-4 rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 z-10 w-full max-w-4xl">
        <input type="text" placeholder="Full Name" className="p-2 bg-transparent border rounded-md text-white placeholder-gray-400 w-full" />
        <input type="email" placeholder="Email Address" className="p-2 bg-transparent border rounded-md text-white placeholder-gray-400 w-full" />
        <input type="text" placeholder="Phone Number" className="p-2 bg-transparent border rounded-md text-white placeholder-gray-400 w-full" />
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-md w-full md:w-auto">Get Started</button>
      </div>
      
      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center space-x-4 mt-8 z-10 w-full max-w-4xl">
        <img src="/inc5000.png" alt="Inc 5000" className="h-12" />
        <img src="/google-partner.png" alt="Google Partner" className="h-12" />
        <img src="/meta.png" alt="Meta Business Partner" className="h-12" />
        <img src="/amazon-ads.png" alt="Amazon Ads Partner" className="h-12" />
      </div>
      
      {/* Help Button */}
      <div className="absolute right-0 top-1/2 bg-yellow-500 px-4 py-2 text-black font-bold transform -rotate-90 z-10">
        Need Help?
      </div>
    </div>
  );
};

export default HeroSection;
