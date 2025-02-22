import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 text-white py-4 px-6 position-sticky">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="https://sitesence.com/wp-content/uploads/2019/07/LogoMakr_0GCWfD.png" alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 ml-10">
          <Link to='/services'>Services</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
