import React from 'react';
import './Hero.css';
import revenueIcon from '../assets/icon-revenue.png';
import clockIcon from '../assets/icon-clock.png';
import roiIcon from '../assets/icon-roi.png';

const Hero: React.FC = () => {
  const stats = [
    { icon: revenueIcon, value: '240%', label: 'Average First-Year ROI' },
    { icon: clockIcon, value: '80+', label: 'Hours Saved Monthly' },
    { icon: roiIcon, value: '$126k+', label: 'Annual Revenue Recovered' }
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="headline">
            Tell us your needs. <span className="underline-text">We build custom AI agents</span> to automate your workflows.
          </h1>
          <p className="subheadline">
            Want to use AI but not sure where to start? Don't get left behind. We design
            adaptable, ready-to-use AI agents tailored specifically for high-volume local businesses.
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
              <img src={stat.icon} alt="" className="stat-icon" />
              <div className="stat-bottom">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;