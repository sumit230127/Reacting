import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import team1 from "../Images/team1.jpg";
import team2 from "../Images/team2.jpg";
import team3 from "../Images/team3.jpg";
import client1 from "../Images/client1.png";
import client2 from "../Images/client2.png";
import client3 from "../Images/client3.png";
import client4 from "../Images/client4.png";

const AboutPage = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center bg-blue-900 text-white text-center px-6">
        <div>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Our Company
          </motion.h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            We are an award-winning digital agency, crafting innovative solutions to drive business growth.
          </p>
        </div>
      </div>

      {/* Company Story & Mission */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2010, we started as a small tech startup. Today, we are a leading digital solutions provider, trusted by 500+ brands globally.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower businesses with cutting-edge technology and marketing strategies that maximize success.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[team1, team2, team3].map((member, index) => (
            <div key={index} className="w-64 bg-gray-200 p-6 rounded-lg shadow-lg">
              <img src={member} alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-lg font-bold">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Logos & Testimonials */}
      <div className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Clients</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {[client1, client2, client3, client4].map((client, index) => (
            <img key={index} src={client} alt="Client Logo" className="h-16" />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-10 max-w-4xl mx-auto">
          <Swiper spaceBetween={20} slidesPerView={1} autoplay={{ delay: 3000 }}>
            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">"Their service exceeded our expectations!"</p>
                <p className="mt-2 font-bold">- Jane Smith, CEO</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">"A game-changer for our business!"</p>
                <p className="mt-2 font-bold">- Mike Johnson, Marketing Director</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
        <p className="text-lg mb-6">Contact us today and let's build something amazing together.</p>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-md font-bold">Get in Touch</button>
      </div>
    </div>
  );
};

export default AboutPage;
