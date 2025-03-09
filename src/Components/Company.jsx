import React from "react";
import jumpingPeople from "../Images/jumping-desktop.jpeg";

const CompanyPage = () => {
  return (
    <section 
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(${jumpingPeople})` }}
    >
      <div className="absolute inset-0 bg-blue-900/60"></div>
      <div className="relative text-center px-6">
        <h1 className="text-6xl font-extrabold md:text-7xl">Real people delivering</h1>
        <h2 className="text-5xl font-semibold mt-4 md:text-6xl">real results</h2>
      </div>
    </section>
  );
};

export default CompanyPage;
