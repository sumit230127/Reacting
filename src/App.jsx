import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
import MarketingPage from './Components/MarketingPage';
import Story from './Components/Story';
import GetInTouch from './Components/GetInTouch';
import TeamSection from './Components/TeamSection';
import Footer from './Components/Footer';
import Services from './Services';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <HeroSection />
            <MarketingPage />
            <Story />
            <GetInTouch />
            <TeamSection />
            <Footer />
          </>} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
