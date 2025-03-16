import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Herosection";
import Marketingpage from "./Components/Marketingpage";
import Story from "./Components/Story";
import Getintouch from "./Components/Getintouch";
import TeamSection from "./Components/Teamsection";
import Services from "./Components/Services";
import CompanyPage from "./Components/Company"; // Import CompanyPage
import Footer from "./Components/Footer";
import Clients from "./Components/Clients"; // ✅ Import Clients (capitalized)
import Contact from "./Components/Contact";


import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="w-full">
        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Marketingpage />
                <Story />
                <Getintouch />
                <TeamSection />
                <Clients /> {/* ✅ Added Clients above Footer */}
                <Footer />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<Contact />} /> {/* Add Contact Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;