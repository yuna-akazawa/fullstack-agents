import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const stats = [
    { value: '$126k+', label: 'Avg. Annual Revenue Recovered' },
    { value: '80+', label: 'Hours Saved Monthly' },
    { value: '240%', label: 'Average First-Year ROI' }
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="headline">
            Tell us your needs. <span className="underline-text">We build custom AI</span> to automate your workflows.
          </h1>
          <p className="subheadline">
            Want to use AI but not sure where to start? Don't get left behind. We design
            adaptable, ready-to-use AI systems tailored specifically for high-volume local businesses.
          </p>
          <div className="hero-buttons">
            <button
              className="cta-button primary-cta"
              data-tally-open="Np6GYG"
            >
              Get your free plan
            </button>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;