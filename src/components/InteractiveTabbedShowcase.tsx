import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import smsDentalImage from '../assets/sms-dental.png';
import smsRealtorImage from '../assets/sms-realtor.png';
import smsHvacImage from '../assets/sms-hvac.png';

// Simple Check icon component
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TabContent {
  id: string;
  label: string;
  image: string;
  stat: string;
  title: string;
  bullets: string[];
}

const InteractiveTabbedShowcase: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState<string>(() => {
    // Check URL parameter for initial tab
    if (tabParam === 'realestate' || tabParam === 'hvac') {
      return tabParam;
    }
    return 'dental'; // Default tab
  });
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Update tab when URL parameter changes
  useEffect(() => {
    if (tabParam === 'realestate' || tabParam === 'hvac' || tabParam === 'dental') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tabs: TabContent[] = [
    {
      id: 'dental',
      label: 'Dental & MedSpa',
      image: '/images/dental-mockup.png',
      stat: '35% of patient calls go unanswered, and 85% of those callers will hang up and call a competitor immediately.',
      title: 'The "Zero Missed Patients" Desk',
      bullets: [
        '24/7 HIPAA-compliant AI Voice Receptionist.',
        'Books appointments directly into OpenDental/Dentrix.',
        '2-way SMS rescheduling to eliminate no-shows.'
      ]
    },
    {
      id: 'realestate',
      label: 'Real Estate & Leasing',
      image: '/images/realestate-mockup.png',
      stat: '78% of buyers choose the first agent who responds. Wait 30 minutes to reply, and your chance of converting drops by 400%.',
      title: 'The Instant "Speed-to-Lead" Engine',
      bullets: [
        'Intercepts Zillow & website leads instantly, 24/7.',
        'AI texts leads to pre-qualify (Budget, Timeline, Pre-approved?).',
        'Syncs transcripts and data directly to your CRM.'
      ]
    },
    {
      id: 'hvac',
      label: 'Home Services & HVAC',
      image: '/images/hvac-mockup.png',
      stat: '27% of home service calls go unanswered. Every missed emergency call is an average of $300 to $1,200 lost revenue.',
      title: 'The 24/7 Emergency Dispatcher',
      bullets: [
        'Never miss a midnight burst pipe or broken AC call.',
        'AI categorizes the emergency and captures the address.',
        'Routes data seamlessly into ServiceTitan or Housecall Pro.'
      ]
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab) || tabs[0];

  // Function to highlight stats
  const highlightText = (text: string) => {
    // Define sentences to highlight
    const highlightSentences = [
      'Every missed emergency call is an average of $300 to $1,200 lost revenue.',
      '78% of buyers choose the first agent who responds.',
      '85% of those callers will hang up and call a competitor immediately.'
    ];

    // Define additional patterns to highlight (percentages)
    const highlightPatterns = [
      '35%',
      'drops by 400%',
      '27%'
    ];

    // Create a regex pattern for all sentences and patterns
    const sentencePattern = highlightSentences
      .map(sentence => sentence.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');

    const additionalPattern = highlightPatterns
      .map(pattern => pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');

    const fullPattern = `(${sentencePattern}|${additionalPattern})`;
    const regex = new RegExp(fullPattern, 'g');

    // Split text by the pattern and highlight matches
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (highlightSentences.includes(part) || highlightPatterns.includes(part)) {
        return (
          <span key={index} style={{
            backgroundColor: '#fef3c7',
            padding: '2px 6px',
            borderRadius: '4px',
            fontWeight: 600
          }}>
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section style={{
      padding: windowWidth >= 768 ? '96px 32px' : '96px 16px',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: windowWidth < 768 ? '36px' : '42px',
            fontWeight: 800,
            color: '#111827',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            Adaptable AI Agents for High-Volume Services
          </h2>
          <p style={{
            fontSize: windowWidth < 768 ? '16px' : '19px',
            color: 'var(--text-dark)',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 500,
            opacity: 0.9
          }}>
            We don't force you into a new platform. We custom-code AI agents to fit seamlessly into the tools you already use.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: windowWidth < 768 ? '40px' : '64px',
          maxWidth: '100%',
          padding: windowWidth < 768 ? '0' : '0 16px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: windowWidth < 768 ? '4px' : '6px',
            backgroundColor: '#faf9f7',
            borderRadius: '9999px',
            gap: windowWidth < 768 ? '2px' : '4px',
            width: windowWidth < 600 ? '100%' : 'auto',
            maxWidth: windowWidth < 600 ? '100%' : '600px',
            justifyContent: windowWidth < 600 ? 'space-between' : 'center'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: windowWidth < 480 ? '8px 12px' : windowWidth < 768 ? '10px 16px' : '12px 24px',
                  margin: activeTab === tab.id ? '0 6px' : '0',
                  borderRadius: '9999px',
                  fontSize: windowWidth < 480 ? '12px' : windowWidth < 768 ? '13px' : '14px',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  backgroundColor: activeTab === tab.id ? '#000000' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#6b7280',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: windowWidth < 600 ? 'normal' : 'nowrap',
                  transform: activeTab === tab.id ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: activeTab === tab.id ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' : 'none',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  flexShrink: windowWidth < 600 ? 1 : 0,
                  minWidth: windowWidth < 600 ? '80px' : 'auto',
                  textAlign: 'center',
                  lineHeight: windowWidth < 600 ? 1.3 : 'normal'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.color = '#111827';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.color = '#6b7280';
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div style={{
          display: 'flex',
          flexDirection: windowWidth >= 768 ? 'row' : 'column',
          gap: windowWidth >= 768 ? '60px' : '40px',
          alignItems: windowWidth >= 768 ? 'center' : 'stretch',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: windowWidth < 768 ? '0 16px' : '0'
        }}>
          {/* Left Column - Text Content */}
          <div style={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.5s ease-out',
            flex: windowWidth >= 768 ? '1' : 'none',
            order: 1
          }}>
            {/* Statistic with Highlight */}
            <div style={{
              marginBottom: '32px'
            }}>
              <p style={{
                fontSize: '18px',
                color: '#374151',
                lineHeight: 1.7,
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}>
                {highlightText(activeContent.stat)}
              </p>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#111827',
              letterSpacing: '-0.01em',
              marginBottom: '24px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              {activeContent.title}
            </h3>

            {/* Bullet Points */}
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {activeContent.bullets.map((bullet, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    flexShrink: 0,
                    marginTop: '2px',
                    marginRight: '12px'
                  }}>
                    <CheckIcon />
                  </div>
                  <span style={{
                    color: '#6b7280',
                    lineHeight: 1.6,
                    fontSize: '16px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div style={{
            position: 'relative',
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.5s ease-out',
            flex: windowWidth >= 768 ? '1' : 'none',
            order: 2
          }}>
            <img
              src={
                activeContent.id === 'dental' ? smsDentalImage :
                activeContent.id === 'realestate' ? smsRealtorImage :
                smsHvacImage
              }
              alt={`SMS conversation for ${activeContent.label}`}
              style={{
                width: windowWidth < 768 ? '90%' : '85%',
                maxWidth: '400px',
                height: 'auto',
                display: 'block',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), 0 5px 15px rgba(0, 0, 0, 0.03)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                margin: '0 auto'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTabbedShowcase;