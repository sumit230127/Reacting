import React from "react";
import Clutch from '../Images/clutch.png';

const GetInTouch = () => {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-blue-900 text-white">
      {/* Left Form Section - Reduced Width */}
      <div className="w-full md:w-2/5 bg-white p-8 rounded-lg shadow-lg text-black mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get Started</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name*" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Email Address*" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Phone Number*" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Company" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Services you are interested in*" className="w-full p-3 border rounded-md" />
          <textarea placeholder="How can we help you?" className="w-full p-3 border rounded-md"></textarea>
          <button className="w-full bg-yellow-500 text-black py-3 rounded-md font-bold hover:bg-yellow-600">
            Submit
          </button>
        </form>
      </div>

      {/* Right Info Section - Intact */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-bold">Ready to speak with a marketing expert?</h2>
        <p className="text-xl mt-2">
          Give us a ring at <span className="text-yellow-500 font-bold">201-870-6000.</span>
        </p>
        <ul className="mt-4 space-y-2">
          <li className="text-lg font-bold">✔ Leading Digital Marketing Agency</li>
          <li className="text-lg font-bold">✔ 900+ Websites Launched</li>
          <li className="text-lg font-bold">✔ $100M+ Client Revenue Generated</li>
        </ul>
        <div className="mt-6 bg-gray-800 p-6 rounded-lg">
          <img src={Clutch} alt="Clutch Award" className="h-20 mx-auto mb-4" />
          <p className="text-center italic">
            "Their procedures, professionalism, and gigantic experience make them beat any other company in the market."
          </p>
          <p className="text-center font-bold mt-2">
            Bartek Jaz <span className="text-gray-400">Plesk</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
