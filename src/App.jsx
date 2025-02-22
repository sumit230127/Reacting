import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
import Marketingpage from './Components/Marketingpage'; 
import Story from './Components/Story';
import Getintouch from './Components/Getintouch';
import TeamSection from './Components/Teamsection';
import Services from './Components/Services';
import Footer from './Components/Footer';
import './index.css';

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
      <HeroSection />
      <Marketingpage />
      <Story />
      <Getintouch />
      <TeamSection />
      <Footer />
    </Router>
  );
};

export default App;
