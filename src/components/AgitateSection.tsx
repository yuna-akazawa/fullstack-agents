import React from 'react';
import './AgitateSection.css';
import discussIcon from '../assets/graphic-discuss.svg';
import buildIcon from '../assets/graphic-build.svg';
import deployIcon from '../assets/graphic-deploy.svg';

const AgitateSection: React.FC = () => {
  const steps = [
    {
      icon: discussIcon,
      title: 'Listen & Audit',
      description: 'We review your current operations and map out your messiest daily workflows.'
    },
    {
      icon: buildIcon,
      title: 'Architect & Build',
      description: 'We custom-code an AI engine to fit seamlessly into the software you already use.'
    },
    {
      icon: deployIcon,
      title: 'Deploy & Maintain',
      description: 'We launch the system, test it live, and maintain it so you just watch the results roll in.'
    }
  ];

  return (
    <section className="agitate-section">
      <div className="agitate-container">
        <h2 className="agitate-title">We Don't Sell Templates. We Build For You.</h2>
        <p className="agitate-description">
          We're designed to be your technical partner, and handle the heavy lifting and infrastructure
          so you can focus on running your business.
        </p>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon">
                <img src={step.icon} alt={step.title} className="step-icon-img" />
              </div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgitateSection;