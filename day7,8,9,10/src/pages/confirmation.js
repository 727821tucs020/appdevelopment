import React from 'react';
import '../assets/css/confirmation.css'; // Import your CSS file for styling
import email from'../assets/images/email.png'
function ConfirmationPage() {
  return (
    <div className="confirmation-container">
      <img
        src={email}
        alt="Email Logo"
        className="email-logo"
      />
      <p className="success-message">
        Your response has been successfully booked. Check your email for
        confirmation.
      </p>
    </div>
  );
}

export default ConfirmationPage;
