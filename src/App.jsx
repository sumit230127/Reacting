import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Herosection';
import Marketingpage from './Components/Marketingpage';
import Story from './Components/Story';
import Getintouch from './Components/Getintouch';
import TeamSection from './Components/Teamsection';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Marketingpage />
      <Story />
      <Getintouch />
      <TeamSection />
      
    </div>
  );
};

export default App;
