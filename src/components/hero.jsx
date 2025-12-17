"use client";
import { useState } from "react";
import './hero.css';
import bgVideo from '../NNIIT_Landing_Page_Assets/bg_video.mp4';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    pincode: "",
    state: "",
    grade: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleSendOTP = () => {
    console.log("Sending OTP to:", formData.countryCode + formData.phone);
  };

  return (
    <section className="hero-section">
      <div className="container">
      
     <video className="hero-video" autoPlay muted loop playsInline>
  <source src={bgVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>


     
      <div className="background-shape bg-top-left"></div>
      <div className="background-shape bg-bottom-right"></div>

      <div className="hero-container">
       
        <div className="hero-left">
          <h1>Revolutionizing Education with AI</h1>
          <p>Learn <strong>your</strong> way with a fully customized curriculum</p>
          <p><strong>one-on-one support</strong> - education made for you.</p>

          <div className="cta-buttons">
            <button type="button" className="cta-btn">NEET</button>
            <button type="button" className="cta-btn">IIT JEE</button>
          </div>

          <div className="stats">
            <div>
              <span className="stats-number">100000+</span>
              <span className="stats-label">Active Learners</span>
            </div>
            <div>
              <span className="stats-number">30%</span>
              <span className="stats-label">Learning Efficiency Improvement</span>
            </div>
            <div>
              <span className="stats-number">100%</span>
              <span className="stats-label">Personalization Learning</span>
            </div>
          </div>
        </div>

        
        <div className="hero-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <div className="phone-row">
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <button type="button" onClick={handleSendOTP}>Send OTP</button>
            <input
              type="text"
              placeholder="Enter Pincode"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            />
            <div className="grid-2">
              <select
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              >
                <option value="">Select State</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
              </select>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              >
                <option value="">Select Grade</option>
                {Array.from({ length: 7 }, (_, i) => 6 + i).map((g) => (
                  <option key={g} value={g}>{`Grade ${g}`}</option>
                ))}
              </select>
            </div>
            <button type="submit">Connect With Our Expert</button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
