import React from "react";
import Storyvideo from "../Images/Storyvideo.mp4";
import Logo1 from "../Images/Logo1.svg";
import Logo2 from "../Images/Logo2.svg";
import Logo3 from "../Images/Logo3.svg";
import Logo4 from "../Images/Logo4.svg";
import Logo5 from "../Images/Logo5.svg";

const Logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const StoryPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-between px-6 pb-20 sm:pb-32">
      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center py-16 md:py-24">
        {/* Video Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <video autoPlay loop muted className="w-full h-auto object-cover rounded-lg shadow-lg">
            <source src={Storyvideo} type="video/mp4" />
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-black">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Story</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            SiteSence was founded by a team of passionate innovators dedicated to transforming the digital landscape.
            With a vision for excellence and a commitment to innovation, SiteSence has rapidly grown into a leading name in digital solutions.
          </p>
          <p className="text-base sm:text-lg">
            Join us as we continue to push the boundaries of creativity and technology, shaping the future with every step we take.
          </p>
        </div>
      </div>

      {/* Logos Section - Evenly Spaced & Color Changing */}
      <div className="w-full flex justify-center items-center gap-x-6 sm:gap-x-10 py-12 sm:py-16 border-t flex-wrap">
        {Logos.map((Logo, index) => (
          <div key={index} className="group transition duration-500 ease-in-out">
            <img
              src={Logo}
              alt={`Logo ${index + 1}`}
              className="w-auto h-8 sm:h-10 md:h-14 object-contain transition-all duration-500 group-hover:opacity-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryPage;