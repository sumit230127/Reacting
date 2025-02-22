import React from "react";
import { motion } from "framer-motion";
import Firstvideo from "../Images/Firstvideo.mp4";
import Letter from "../Images/letter.png";

// Importing the images for services
import WebDesignIcon from "../Images/web-design.png";
import EmailMarketingIcon from "../Images/email-marketing.png";
import SEOIcon from "../Images/seo.png";
import PPCMarketingIcon from "../Images/ppc-marketing.png";
import SocialMediaIcon from "../Images/social-media.png";

const services = [
  { name: "Web Design", image: WebDesignIcon, description: "We create visually stunning websites." },
  { name: "Email Marketing", image: EmailMarketingIcon, description: "Engage your audience with powerful emails." },
  { name: "SEO", image: SEOIcon, description: "Rank higher on Google with proven SEO techniques." },
  { name: "PPC Marketing", image: PPCMarketingIcon, description: "Boost your reach with targeted paid ads." },
  { name: "Social Media", image: SocialMediaIcon, description: "Grow your brand with strategic social media campaigns." },
];

const MarketingPage = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center text-white px-6">
      <video autoPlay loop muted className="absolute top-0 left-0 w-screen h-screen object-cover">
        <source src={Firstvideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div
        className="relative w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-6"
        style={{ backgroundImage: `url(${Letter})` }}
      >
        <div className="absolute inset-0 bg-blue-500 bg-opacity-50"></div>

        <h2 className="text-4xl sm:text-5xl font-bold z-10 mt-[-50px]">Results-driven Marketing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 z-10 w-full px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-12 sm:p-14 md:p-16 bg-white text-black rounded-lg text-center font-semibold transition duration-300 flex flex-col items-center hover:bg-yellow-400 hover:scale-105 shadow-none"
            >
              {service.image ? (
                <img src={service.image} alt={service.name} className="h-16 sm:h-20 md:h-24 mb-4 object-contain" />
              ) : (
                <div className="h-16 sm:h-20 md:h-24 mb-4 w-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <span className="text-xl font-bold">{service.name}</span>
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
