import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AgitateSection from './components/AgitateSection';
import SectorCards from './components/SectorCards';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <SectorCards />
      <AgitateSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
