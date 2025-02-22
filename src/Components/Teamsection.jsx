import React from "react";
import Team from '../Images/team.jpg';

const TeamSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row items-center px-6 bg-white text-black">
    
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-7xl mb-20 font-bold">The Team You Need To Succeed</h2>
        <p className="text-lg">
        Driven by passion and a dedication to our clients, our team of 100+ digital experts delivers impactful results for both small businesses and Fortune 500 companies.
        </p>
      </div>
      
      
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img 
          src={Team} 
          alt="Team" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default TeamSection;
