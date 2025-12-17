import React from "react";
import "./ImpactScale.css";

const impactData = [
  {
    title: "Global Reach",
    value: "12+ Countries",
    description:
      "Empowering learners worldwide with personalized, flexible, and high-impact live classes.",
    color: "#D9B3FF", 
  },
  {
    title: "Live Learning Hours",
    value: "3.1+ Crore Hours",
    description:
      "Delivering extensive, high-quality, and interactive one-on-one learning experiences across the globe.",
    color: "#FFC59D", 
  },
  {
    title: "Doubts Resolved",
    value: "3M+ Doubts Answered",
    description:
      "Ensuring clarity and deeper understanding by resolving every student's queries instantly through our app.",
    color: "#A9F5D0", 
  },
];

const ImpactScale = () => {
  return (
    <div className="impact-wrapper">
      <div className="container">
      <h2 className="impact-heading">Impact At Scale</h2>
      <div className="impact-cards">
        {impactData.map((item, index) => (
          <div key={index} className="impact-card">
            <span
              className="impact-title"
              style={{ backgroundColor: item.color }}
            >
              {item.title}
            </span>
            <h3 className="impact-value">{item.value}</h3>
            <p className="impact-description">{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ImpactScale;
