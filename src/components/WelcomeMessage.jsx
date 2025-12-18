import React, { useState, useEffect } from "react";
import "./WelcomeMessage.css";

export default function WelcomeMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    state: "",
    grade: "",
  });

  useEffect(() => {
    // Show the popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = () => {
    alert("OTP Sent!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  if (!isVisible) return null;

  return (
    <div className="welcome-overlay" onClick={() => setIsVisible(false)}>
      <div className="welcome-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setIsVisible(false)}>✕</button>

        <h2>Welcome!</h2>
        <p>Please take a moment to fill out this form.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleInput}
            required
          />

          <div className="phone-row">
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              onChange={handleInput}
              required
            />
            <button type="button" className="otp-btn" onClick={sendOtp}>
              Send OTP
            </button>
          </div>

          <input
            type="text"
            name="pincode"
            placeholder="Enter Pincode"
            onChange={handleInput}
            required
          />

          <select name="state" onChange={handleInput} required>
            <option value="">Select Your State</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>

          <select name="grade" onChange={handleInput} required>
            <option value="">Select Your Grade</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
          </select>

          <button type="submit" className="submit-btn">
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
}
