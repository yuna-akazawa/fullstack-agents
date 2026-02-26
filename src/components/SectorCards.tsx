import React from 'react';
import './SectorCards.css';

interface Sector {
  title: string;
  reality: string;
  headline: string;
  bullets: string[];
}

const SectorCards: React.FC = () => {
  const sectors: Sector[] = [
    {
      title: 'Dental & MedSpa',
      reality: '<span class="stat-bold">35% of patient calls go unanswered</span>, and <span class="stat-bold">85% of those callers</span> will hang up and call a competitor immediately.',
      headline: 'The "Zero Missed Patients" Desk',
      bullets: [
        '24/7 HIPAA-compliant AI Voice Receptionist.',
        'Books appointments directly into OpenDental/Dentrix.',
        '2-way SMS rescheduling to eliminate no-shows.'
      ]
    },
    {
      title: 'Real Estate & Leasing',
      reality: '<span class="stat-bold">78% of buyers</span> choose the first agent who responds. Wait 30 minutes to reply, and your chance of converting <span class="stat-bold">drops by 400%</span>.',
      headline: 'The Instant "Speed-to-Lead" Engine',
      bullets: [
        'Intercepts Zillow & website leads instantly, 24/7.',
        'AI texts leads to pre-qualify (Budget, Timeline, Pre-approved?).',
        'Syncs transcripts and data directly to your CRM.'
      ]
    },
    {
      title: 'Home Services & HVAC',
      reality: '<span class="stat-bold">27% of home service calls go unanswered</span>. Every missed emergency call is an average of <span class="stat-bold">$300 to $1,200</span> lost revenue.',
      headline: 'The 24/7 Emergency Dispatcher',
      bullets: [
        'Never miss a midnight burst pipe or broken AC call.',
        'AI categorizes the emergency and captures the address.',
        'Routes data seamlessly into ServiceTitan or Housecall Pro.'
      ]
    }
  ];

  return (
    <section className="sector-cards">
      <div className="sector-container">
        <div className="sector-header-section">
          <h2 className="sector-main-title">
            Adaptable AI Agents for High-Volume Services
          </h2>
          <p className="sector-subtitle">
            We don't force you into a new platform. We custom-code AI agents to fit seamlessly into the tools you already use.
          </p>
        </div>
        <div className="sector-grid">
          {sectors.map((sector, index) => (
            <div key={index} className="sector-card">
              <div className="sector-header">
                <h3 className="sector-title">{sector.title}</h3>
              </div>
              <div className="sector-reality">
                <span className="reality-emoji">👉</span> <span dangerouslySetInnerHTML={{ __html: sector.reality }} />
              </div>
              <h4 className="sector-headline">{sector.headline}</h4>
              <ul className="sector-bullets">
                {sector.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="sector-disclaimer">
          *Statistics reflect 2025-2026 national industry averages for SMB operational efficiency and automation adoption.
        </p>
      </div>
    </section>
  );
};

export default SectorCards;