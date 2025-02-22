import React from "react";
import Storyvideo from "../Images/Storyvideo.mp4";

import Logo1 from "../Images/Logo1.png";
import Logo2 from "../Images/Logo2.png";
import Logo3 from "../Images/Logo3.png";
import Logo4 from "../Images/Logo4.png";
import Logo5 from "../Images/Logo5.png";

const Logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const StoryPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-between px-6 pb-10">
      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center py-10 md:py-20">
        {/* Video Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <video autoPlay loop muted className="w-full md:w-4/5 h-full object-cover rounded-lg shadow-lg">
            <source src={Storyvideo} type="video/mp4" />
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-black">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            SiteSence was founded by a team of passionate innovators dedicated to transforming the digital landscape.
            With a vision for excellence and a commitment to innovation, SiteSence has rapidly grown into a leading name in digital solutions.
          </p>
          <p className="text-lg">
            Join us as we continue to push the boundaries of creativity and technology, shaping the future with every step we take.
          </p>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full flex justify-center items-center flex-wrap gap-6 py-6 border-t">
        {Logos.map((Logo, index) => (
          <img key={index} src={Logo} alt={`Logo ${index + 1}`} className="h-12 md:h-16 object-contain" />
        ))}
      </div>
    </div>
  );
};

export default StoryPage;
