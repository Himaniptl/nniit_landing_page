import React from "react";
import "./faq.css";


const faqs = [
  {
    q: "What makes NNIIT's JEE & NEET preparation unique?",
    a: "NNIIT offers personalized one-on-one mentorship, adaptive learning plans, and continuous performance tracking."
  },
  {
    q: "How does NNIIT's one-on-one learning benefit students preparing for JEE & NEET?",
    a: "Each student gets a dedicated mentor, focused doubt-solving, and customized pacing for better concept clarity."
  },
  {
    q: "What JEE & NEET preparation programs does NNIIT offer?",
    a: "Foundation, Target, Crash courses, and long-term preparation programs for JEE & NEET."
  },
  {
    q: "How does NNIIT’s online JEE & NEET preparation work?",
    a: "Live interactive classes, recorded sessions, regular tests, and real-time progress monitoring."
  },
  {
    q: "What kind of study materials does NNIIT provide for JEE & NEET?",
    a: "Concept notes, practice questions, mock tests, and exam-simulation based learning material."
  }
];

const FAQ = () => {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-grid">
        {faqs.map((item, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <p>{item.q}</p>
                <span>+</span>
              </div>

              <div className="faq-card-back">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
