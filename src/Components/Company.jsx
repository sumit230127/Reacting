import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white" style={{
      backgroundImage: "url('/path-to-your-image.png')",
      backgroundColor: "#003366",
      backgroundBlendMode: "multiply"
    }}>
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
      <div className="relative text-center px-4">
        <h1 className="text-5xl font-bold">Real people delivering</h1>
        <h2 className="text-4xl font-semibold mt-2">real results</h2>
      </div>
    </div>
  );
}
