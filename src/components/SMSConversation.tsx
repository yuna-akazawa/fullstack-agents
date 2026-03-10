import React from 'react';
import './SMSConversation.css';

const SMSConversation: React.FC = () => {
  return (
    <div className="sms-conversation">
      {/* Assistant message */}
      <div className="sms-message sms-assistant">
        <div className="sms-avatar">👩‍⚕️</div>
        <div className="sms-bubble">
          <p>Reschedule your appointment to March 3, 2025?</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="sms-actions">
        <button className="sms-btn sms-btn-confirm">Yes, confirm</button>
        <button className="sms-btn sms-btn-cancel">No, make changes</button>
      </div>

      {/* User response */}
      <div className="sms-message sms-user">
        <div className="sms-bubble sms-bubble-user">
          <span>Yes, confirm</span>
        </div>
        <div className="sms-avatar-user">A</div>
      </div>

      {/* Assistant confirmation */}
      <div className="sms-message sms-assistant">
        <div className="sms-avatar">👩‍⚕️</div>
        <div className="sms-bubble">
          <p>Great, I've rescheduled your appointment ✓ See you soon!</p>
        </div>
      </div>
    </div>
  );
};

export default SMSConversation;