import React from "react";
import "./DemoModal.css";

const DemoModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="demo-close" onClick={onClose}>×</button>

        <h3 className="demo-title">Book a Demo Form</h3>

        <select className="demo-input">
          <option>Select course</option>
          <option>IIT JEE</option>
          <option>NEET</option>
          <option>Foundation</option>
        </select>

        <input
          type="text"
          className="demo-input"
          placeholder="Enter Your Name"
        />

        <div className="phone-row">
          <input className="country-code" value="+91" disabled />
          <input
            type="tel"
            className="phone-input"
            placeholder="Phone Number"
          />
        </div>

        <button className="otp-btn">Send OTP</button>
      </div>
    </div>
  );
};

export default DemoModal;
