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
            <img src={logo} alt="Full Stack Agents Logo" className="sbs-logo-icon" />
            <span>Full Stack Agents</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="sbs-hero">
        <div className="sbs-container">
          <h1 className="sbs-headline">Exclusive Operations Audit for the SBS Community</h1>
          <p className="sbs-blurb">
            We are a boutique tech partner for New York's local practices, clinics, and service businesses.
          </p>
          <p className="sbs-subheadline">
            We build the behind-the-scenes systems that make your client experience amazing and give your team their time back.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="sbs-vision">
        <div className="sbs-container">
          <h2>Grow your business without losing that personal touch.</h2>
          <p>
            As a fellow SBS parent and local business owner right here in the city, I know how hard your team works to take care of your clients.
            As your business grows, your staff's time becomes your most valuable asset. Their talents are best spent face to face with the people
            you serve instead of managing appointment followups, navigating schedule changes, or playing phone tag with new inquiries.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="sbs-solution">
        <div className="sbs-container">
          <h2>The Complimentary SBS Operations Audit</h2>
          <p>
            Fullstack Agents builds custom digital systems that run quietly in the background to make your day easier.
            To support our school community, we are offering a complimentary 30-minute baseline Operations Audit for all SBS families.
          </p>
          <p>
            On this quick and casual introductory call, we can explore exactly how tailored technology can help your business:
          </p>
          <ul className="sbs-benefits">
            <li>Provide a smooth booking experience that securely captures and qualifies web inquiries after hours.</li>
            <li>Automatically manage your waitlist to make sure your calendar stays full.</li>
            <li>Run continuous and personalized check-ins between visits so your clients always feel supported.</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sbs-cta">
        <div className="sbs-container">
          <a
            href="https://calendly.com/yuna-akazawa-aiy3/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="sbs-cta-button"
          >
            Book Your Complimentary Audit
          </a>
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