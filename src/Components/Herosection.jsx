import React from "react";
import { motion } from "framer-motion";
import Firstvideo from "../Images/Firstvideo.mp4";
import google from '../Images/googlepartner.png';
import inc500 from '../Images/inc500.png';
import meta from '../Images/meta.png';
import amazon from '../Images/amazon-Ads.png';
import mobileImage from '../Images/mobile-screen.jpeg';

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center text-white px-6 mt-10">
      <video autoPlay loop muted className="absolute top-0 left-0 w-screen h-screen object-cover hidden md:block">
        <source src={Firstvideo} type="video/mp4" />
      </video>
      <div className="relative inset-0 bg-black bg-opacity-50"></div>

      {/* Mobile Image */}
      <img src={mobileImage} alt="Mobile View" className="block md:hidden mt-140 w-full h-auto object-cover" />

      <div className="text-center mb-2.5 z-10 text-black px-4">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {"Award-Winning".split("").map((char, index) => (
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
          className="text-4xl sm:text-5xl md:text-6xl mb-60 font-bold mt-2"
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
          className="mt-4 text-xl sm:text-xl"
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
      <div className="bg-black bg-opacity-70 p-6 rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8 z-10  w-4xl mx-auto">
        <input type="text" placeholder="Full Name" className="p-2 bg-transparent border rounded-md text-white placeholder-gray-400 w-full" />
        <input type="email" placeholder="Email Address" className="p-2 bg-transparent border rounded-md text-white placeholder-gray-400 w-full" />
        <input type="text" placeholder="Phone Number" className="p-2 bg-transparent border rounded-md text-white placeholder-gray-400 w-full" />
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-md w-full md:w-auto">Get Started</button>
      </div>

      <div className="flex flex-wrap justify-center space-x-4 mt-8 z-10 w-full max-w-4xl">
        <img src={inc500} alt="Inc 5000" className="h-12" />
        <img src={google} alt="Google Partner" className="h-12" />
        <img src={meta} alt="Meta Business Partner" className="h-12" />
        <img src={amazon} alt="Amazon Ads Partner" className="h-12" />
      </div>

      <div className="absolute right-0 top-1/2 bg-yellow-500 px-4 py-2 text-black font-bold transform -rotate-90 z-10 sm:hidden">
        Need Help?
      </div>
    </div>
  );
};

export default HeroSection;