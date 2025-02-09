import React from "react";

const StoryPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-center px-6">
      {/* Video Section */}
      <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Story Section */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-6 bg-gray-100 text-black">
        <h2 className="text-4xl font-bold mb-4">Our Story</h2>
        <p className="text-lg mb-4">
          Welcome to our journey! We started with a vision to innovate and bring meaningful solutions
          to the digital world. Over the years, we have grown into a team of passionate professionals
          dedicated to delivering excellence in every project.
        </p>
        <p className="text-lg">
          Join us as we continue to push the boundaries of creativity and technology, shaping the future
          with every step we take.
        </p>
      </div>
    </div>
  );
};

export default StoryPage;
