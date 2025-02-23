import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 text-white py-4 px-6 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="https://sitesence.com/wp-content/uploads/2019/07/LogoMakr_0GCWfD.png" 
            alt="Logo" 
            className="h-10"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to='/services' className="hover:text-gray-200">Services</Link>
          <Link to="/our-work" className="hover:text-gray-200">Our Work</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-yellow-400 w-full absolute top-full left-0 py-4 shadow-lg">
          <Link to='/services' className="py-2 text-center hover:bg-yellow-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/our-work" className="py-2 text-center hover:bg-yellow-500" onClick={() => setIsOpen(false)}>Our Work</Link>
          <Link to="/About.jsx" className="py-2 text-center hover:bg-yellow-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="py-2 text-center hover:bg-yellow-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
