import React from 'react';
import './SBSLanding.css';
import logo from '../assets/logo-white.svg';
import visionGraphic from '../assets/vision-graphic-new.svg';

const SBSLanding: React.FC = () => {
  return (
    <div className="sbs-page">
      {/* Navigation */}
      <nav className="sbs-navigation">
        <div className="sbs-nav-container">
          <a href="/" className="sbs-logo">
            <img src={logo} alt="Full Stack Agents Logo" className="sbs-logo-icon" />
            <span>Full Stack Agents</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="sbs-hero">
        <div className="sbs-container">
          <h1 className="sbs-headline">Free Operations Audit for the SBS Community</h1>
          <p className="sbs-blurb">
            We are a NY-based tech partner specializing in custom AI solutions that streamline workflows for local businesses.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="sbs-vision">
        <div className="sbs-container">
          <div className="sbs-vision-card">
            <h2>Let us handle the tech, so you can focus on what matters.</h2>
            <p>
              Smart automation can reduce operational costs by 30% while freeing up 10+ hours weekly for your team.
              Stop paying for overtime on repetitive tasks. Let AI handle scheduling, follow-ups, and client communications
              so your staff can focus on revenue-generating activities.
            </p>
            <a
              href="https://calendly.com/yuna-akazawa-aiy3/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="sbs-cta-button"
              style={{ marginTop: '40px', display: 'inline-block' }}
            >
              Book your free audit
            </a>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="sbs-solution">
        <div className="sbs-container">
          <div className="sbs-solution-grid">
            <div className="sbs-solution-text">
              <h2>Complimentary SBS Operations Audit</h2>
              <p>
                We build custom AI systems that automate your daily operations—quietly and efficiently.
              </p>
              <p>
                <strong>For SBS families only:</strong> Get a free 30-minute audit to discover how AI can transform your business.
              </p>
              <a
                href="https://calendly.com/yuna-akazawa-aiy3/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="sbs-text-link"
              >
                Book your free audit
              </a>
            </div>
            <div className="sbs-benefits-card">
              <ul className="sbs-benefits">
                <li>24/7 automated appointment booking & rescheduling</li>
                <li>Smart invoice generation & payment reminders</li>
                <li>Instant customer support chatbot for FAQs</li>
                <li>Automated review collection & reputation management</li>
                <li>Personalized email & SMS marketing campaigns</li>
                <li>Inventory tracking & automatic reorder alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="sbs-footer">
        <div className="sbs-container">
          <p>Fullstack Agents | New York, NY</p>
        </div>
      </footer>
    </div>
  );
};

export default SBSLanding;