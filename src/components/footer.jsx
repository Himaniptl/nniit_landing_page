import React from "react";
import logo from "../NNIIT_Landing_Page_Assets/logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Courses</h4>
          <p>
            <a href="/courses/cbse">CBSE Tuitions</a> |{" "}
            <a href="/courses/icse">ICSE Tuitions</a> |{" "}
            <a href="/courses/jee">JEE (Mains & Advanced)</a> |{" "}
            <a href="/courses/neet">NEET</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <p>
            <a href="/about">About us</a> |{" "}
            <a href="/contact">Contact Us</a> |{" "}
            <a href="/blog">NNIIT Blog</a> |{" "}
            <a href="/why-nniit">Why NNIIT</a> |{" "}
            <a href="/results">Our results</a> |{" "}
            <a href="/careers">Careers</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="contact-info">
          <p>+91 9110763704 (10:30 AM to 8:00 PM on all days)</p>
          <p>info@nniit.com</p>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="NNIIT Logo" width={120} height={40} />
          <p id="res">© 2025 NNIIT. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
