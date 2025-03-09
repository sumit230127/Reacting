import React from "react";
import jumpingdesktop from "../Images/jumping-desktop.jpeg"; // WebP image

const CompanyPage = () => {
  return (
    <section 
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${jumping-desktop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-blue-900/60"></div>

      {/* Text Content */}
      <div className="relative text-center px-6">
        <h1 className="text-5xl font-extrabold md:text-6xl">Real people delivering</h1>
        <h2 className="text-4xl font-semibold mt-4 md:text-5xl">real results</h2>
      </div>
    </section>
  );
};

export default CompanyPage;
