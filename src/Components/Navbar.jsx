import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 text-black p-3 fixed top-0 w-full z-50">
      <div className="container mx-auto">
        <h1 className="text-xs text-center font-small">
          Join our 2025 Marketing Predictions Webinar on 24/7
        </h1>
        <p className="text-xs text-center mt-1">
          <strong>WARNING:</strong> Scammers are using the SmartSites brand name. Do not get scammed. 
          <a href="#" className="underline ml-1">Read More</a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
