import React from 'react';
import './Navigation.css';
import logo from '../assets/logo.svg';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Fullstack Agents Logo" className="logo-icon" />
          <span>FULLSTACK AGENTS</span>
        </div>
        <button
          className="cta-button nav-cta"
          data-tally-open="Np6GYG"
        >
          Get your free plan
        </button>
      </div>
    </nav>
  );
};

export default Navigation;