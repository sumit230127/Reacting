import React from "react";

const TeamSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row items-center px-6 bg-white text-black">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-5xl font-bold mb-6">The team you need to succeed</h2>
        <p className="text-lg">
          Fueled by passion and a commitment to our clients, our team of over 100 digital experts drives performance 
          for small businesses and Fortune 500 companies alike.
        </p>
      </div>
      
      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img 
          src="https://source.unsplash.com/800x600/?team,corporate" 
          alt="Team" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default TeamSection;
