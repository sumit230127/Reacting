import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 px-6 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://sitesence.com/wp-content/uploads/2019/07/LogoMakr_0GCWfD.png"
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/services" className="text-yellow-400 font-semibold">
            Services
          </Link>
          <Link to="/our-work" className="hover:text-gray-300">
            Our Work
          </Link>
          <Link to="/company" className="hover:text-gray-300">
            Company
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <a href="tel:2018706000" className="text-yellow-400 font-bold">
            201-870-6000
          </a>
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
        <div className="md:hidden flex flex-col bg-black w-full absolute top-full left-0 py-4 shadow-lg">
          <Link
            to="/services"
            className="py-2 text-center text-yellow-400 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/our-work"
            className="py-2 text-center hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Our Work
          </Link>
          <Link
            to="/company"
            className="py-2 text-center hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Company
          </Link>
          <Link
            to="/contact"
            className="py-2 text-center hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:2018706000"
            className="py-2 text-center text-yellow-400 font-bold"
          >
            201-870-6000
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
