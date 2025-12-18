import React from "react";
import "./features.css";
import oneonone from "../NNIIT_Landing_Page_Assets/oneononestudy.jpg";
import curriculum from "../NNIIT_Landing_Page_Assets/exam_stimualtion_library.jpg";
import practice from "../NNIIT_Landing_Page_Assets/practicequestion.jpg";
import ai from "../NNIIT_Landing_Page_Assets/aibasedevaluation.jpg";
import guidance from "../NNIIT_Landing_Page_Assets/guidance.jpg";
import schedule from "../NNIIT_Landing_Page_Assets/flexibletime.jpg";
import roadmap from "../NNIIT_Landing_Page_Assets/roadmap.jpg";
import monitoring from "../NNIIT_Landing_Page_Assets/progress.jpg";
import simulation from "../NNIIT_Landing_Page_Assets/exam_stimualtion_library.jpg";

const features = [
  { title: "One-on-One Tutoring", img: oneonone },
  { title: "Custom Curriculum", img: curriculum },
  { title: "Daily Practice Problems", img: practice },
  { title: "AI-Based Evaluation", img: ai },
  { title: "Elite Guidance", img: guidance },
  { title: "Flexible Schedule", img: schedule },
  { title: "Personalized Learning Roadmap", img: roadmap },
  { title: "Progress Monitoring", img: monitoring },
  { title: "Exam Simulation Library", img: simulation },
];

const Features = () => {
  return (
    <section className="features-wrapper">
      <div className="features-container">
        <h2 className="features-title">Features We Provide</h2>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <img
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
