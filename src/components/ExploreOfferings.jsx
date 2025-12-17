import React, { useState } from "react";
import "./ExploreOfferings.css";
import foundation from "../NNIIT_Landing_Page_Assets/Foundation2.png"
import class11 from "../NNIIT_Landing_Page_Assets/Class11thProgram.png"
import class12 from "../NNIIT_Landing_Page_Assets/Class12thProgram.png"
import customisedimage from "../NNIIT_Landing_Page_Assets/Customised Program.png"
import crashcourse from "../NNIIT_Landing_Page_Assets/crashcourse.png"

const DATA = {
  "IIT-JEE": {
    course: [
      { title: "FOUNDATION", image: foundation },
      { title: "CRASH COURSE", image: crashcourse },
      { title: "CLASS 12 PROGRAM", image: class12 },
      { title: "CLASS 11 PROGRAM", image: class11, badge: "BESTSELLER" },
      { title: "CUSTOMISED PROGRAM", image:customisedimage },
    ],
    material: [
      { title: "NCERT SOLUTIONS", image: "/images/ncert.jpg" },
      { title: "QUESTION BANK", image: "/images/questions.jpg" },
      { title: "MOCK TESTS", image: "/images/mock.jpg" },
    ],
  },

  NEET: {
    course: [
      { title: "NEET FOUNDATION", image: foundation },
      { title: "NEET CRASH COURSE", image:crashcourse },
      { title: "NEET CLASS 12", image: class12},
      { title: "NEET CLASS 11", image: class11, badge: "BESTSELLER" },
    ],
    material: [
      { title: "BIOLOGY NCERT", image: "/images/ncert.jpg" },
      { title: "NEET MOCK TESTS", image: "/images/mock.jpg" },
    ],
  },

  SAT: {
    course: [
      { title: "SAT FOUNDATION", image: "/images/foundation.jpg" },
      { title: "SAT ADVANCED", image: "/images/class12.jpg" },
      { title: "SAT 1-ON-1", image: "/images/customised.jpg" },
    ],
    material: [
      { title: "SAT PRACTICE SETS", image: "/images/questions.jpg" },
    ],
  },
};

export default function ExploreOfferings() {
  const [activeTab, setActiveTab] = useState("IIT-JEE");
  const [activeType, setActiveType] = useState("course");

  const cards = DATA[activeTab][activeType];

  return (
    <section className="offerings-wrapper">
      <h2>Explore all our offerings</h2>

      <div className="tabs">
        {Object.keys(DATA).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => {
              setActiveTab(tab);
              setActiveType("course");
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="divider" />

      <div className="right-links">
        <span
          className={activeType === "course" ? "active" : ""}
          onClick={() => setActiveType("course")}
        >
          COURSE
        </span>
        <span
          className={activeType === "material" ? "active" : ""}
          onClick={() => setActiveType("material")}
        >
          STUDY MATERIAL
        </span>
      </div>

      <div className="card-grid">
        {cards.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />

            {item.badge && <div className="badge">{item.badge}</div>}

            <div className="card-body">
              <h4>{item.title}</h4>
              <div className="rating">★★★★★</div>
              <p>1,200 ratings</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
