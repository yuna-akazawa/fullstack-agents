import React from 'react';
import './SBSLanding.css';
import logo from '../assets/logo.svg';

const SBSLanding: React.FC = () => {
  return (
    <div className="sbs-page">
      {/* Navigation */}
      <nav className="sbs-navigation">
        <div className="sbs-nav-container">
          <a href="/" className="sbs-logo">
            <img src={logo} alt="Fullstack Agents Logo" className="sbs-logo-icon" />
            <span>FULLSTACK AGENTS</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="sbs-hero">
        <div className="sbs-container">
          <h1 className="sbs-headline"><span style={{ textDecoration: 'underline' }}>Free Consultation</span> for SBS Community</h1>
          <p className="sbs-blurb">
            We are a NY-based tech partner specializing in <strong>custom AI solutions</strong> that streamline workflows for local businesses.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="sbs-vision">
        <div className="sbs-container">
          <div className="sbs-vision-card">
            <h2>Let us handle the tech, so you can focus on what matters.</h2>
            <p>
              Did you know that companies using AI automation report up to <span style={{ textDecoration: 'underline' }}>86% cost reduction</span> and get $3.70 ROI for every dollar spent?
              We understand that not every AI solution fits every business. At Fullstack Agents, we listen to your unique challenges and goals,
              then <span style={{ textDecoration: 'underline' }}>build custom automation tools</span> tailored specifically to your needs.
            </p>
            <a
              href="https://calendly.com/yuna-akazawa-aiy3/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="sbs-cta-button"
              style={{ marginTop: '24px', display: 'inline-block' }}
            >
              Book your free audit
            </a>
          </div>
          <p className="sbs-disclaimer" style={{ marginTop: '20px', fontSize: '12px', color: '#6b7280', fontStyle: 'italic' }}>
            *Based on McKinsey's 2024 State of AI report and enterprise automation studies
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="sbs-solution">
        <div className="sbs-container">
          <div className="sbs-solution-grid">
            <div className="sbs-solution-text">
              <h2>Complimentary Operations Audit</h2>
              <p>
                Want to adopt AI but not sure where to start? Have specific business goals you want to achieve? Start here.
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