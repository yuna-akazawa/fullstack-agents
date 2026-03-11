import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AgitateSection from '../components/AgitateSection';
import InteractiveTabbedShowcase from '../components/InteractiveTabbedShowcase';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <InteractiveTabbedShowcase />
      <AgitateSection />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default HomePage;