import React, { useRef } from "react";
import "./wallOfLove.css";

const reviews = [
  {
    quote:
      "The one-on-one coaching of NNIIT helped my son to understand tough IIT JEE topics easily and boosted his confidence!",
    name: "Rajesh Sharma",
    role: "Manager at Infosys",
    rating: 5,
  },
  {
    quote:
      "We’re so thankful to NNIIT for all the support they’ve given our daughter. The personalized tutoring and the ability for her to learn at her own pace has made a huge difference.",
    name: "Saurabh Tiwari, Pooja Tiwari",
    role: "Product Manager at Apple & Marketing Specialist at Microsoft",
    rating: 4.9,
  },
  {
    quote:
      "As a teacher at this organization, NNIIT's approach not only simplifies complex concepts but also ensures learning fits smoothly into each student’s unique schedule.",
    name: "Chaitanya Krishna",
    role: "Teacher",
  },
  {
    quote:
      "Having a tutor always available at my time made IIT JEE prep stress-free and super effective!",
    name: "Anusha Priya",
    role: "XII ICSE",
  },
  {
    quote:
      "Whether for IIT JEE, NEET, or any exam, the personal coaching made everything clear and easy to understand!",
    name: "Ishan Gupta & Usha Gupta",
    role: "Parent & Student",
    rating: 4.9,
  },
];

const WallOfLove = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <div className="wall-wrapper">
      <h2>OUR TOP REVIEWS</h2>

      <div className="slider-container">
        <button className="nav-btn left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="cards-wrapper" ref={scrollRef}>
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <span className="quote-icon">❝</span>

              <p className="quote">{r.quote}</p>

              {r.rating && (
                <div className="rating">
                  ⭐⭐⭐⭐⭐ <span>{r.rating}</span>
                </div>
              )}

              <div className="user">
                <p className="name">{r.name}</p>
                <p className="role">{r.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </div>
  );
};

export default WallOfLove;
