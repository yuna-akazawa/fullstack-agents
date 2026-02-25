import React from 'react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: '🎧',
      title: 'Listen & Audit',
      description: 'We review your current operations and map out your messiest daily workflows.'
    },
    {
      icon: '⚙️',
      title: 'Architect & Build',
      description: 'We custom-code an AI engine to fit seamlessly into the software you already use.'
    },
    {
      icon: '🚀',
      title: 'Deploy & Maintain',
      description: 'We launch the system, test it live, and maintain it so you just watch the results roll in.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-container">
        <h2>We Don't Sell Templates. We Build For You.</h2>
        <div className="process-timeline" style={{ marginTop: '48px' }}>
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;