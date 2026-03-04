import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AgitateSection from '../components/AgitateSection';
import SectorCards from '../components/SectorCards';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <SectorCards />
      <AgitateSection />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default HomePage;