import React from 'react';
import './FinalCTA.css';

const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta">
      <div className="final-container">
        <h2>Ready to work smarter?</h2>
        <p className="final-description">
          Let's start small. Tell us about your most frustrating manual process or bottleneck.
          We will review it and send you a free, no-obligation breakdown showing exactly how
          a custom AI workflow can solve it.
        </p>
        <button
          className="cta-button final-button"
          data-tally-open="Np6GYG"
        >
          Get your free plan
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;