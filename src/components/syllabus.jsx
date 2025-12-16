import React from "react";
import "./syllabus.css";

const syllabusData = [
  {
    heading: "Class 12",
    links: [
      "NCERT",
      "NCERT Solutions",
      "NCERT Solutions for Class 12",
      "NCERT Solutions for Class 12 Maths",
      "NCERT Solutions for Class 12 Physics",
      "NCERT Solutions for Class 12 Chemistry",
      "NCERT Solutions for Class 12 Biology",
      "NCERT Solutions for Class 12 Business Studies",
      "NCERT Solutions for Class 12 Economics",
      "NCERT Solutions for Class 12 Accountancy",
      "NCERT Solutions for Class 12 English",
      "NCERT Solutions for Class 12 Hindi",
    ],
  },
  {
    heading: "Class 11",
    links: [
      "NCERT Solutions for Class 11",
      "NCERT Solutions for Class 11 Maths",
      "NCERT Solutions for Class 11 Physics",
      "NCERT Solutions for Class 11 Chemistry",
      "NCERT Solutions for Class 11 Biology",
      "NCERT Solutions for Class 11 Business Studies",
      "NCERT Solutions for Class 11 Economics",
      "NCERT Solutions for Class 11 Accountancy",
      "NCERT Solutions for Class 11 English",
      "NCERT Solutions for Class 11 Hindi",
    ],
  },
  {
    heading: "Class 10 & 9",
    links: [
      "NCERT Solutions for Class 10",
      "NCERT Solutions for Class 10 Maths",
      "NCERT Solutions for Class 10 Science",
      "NCERT Solutions for Class 10 English",
      "NCERT Solutions for Class 10 Social Science",
      "NCERT Solutions for Class 10 Hindi",
      "NCERT Solutions for Class 9",
      "NCERT Solutions for Class 9 Maths",
      "NCERT Solutions for Class 9 Science",
      "NCERT Solutions for Class 9 English",
      "NCERT Solutions for Class 9 Social Science",
      "NCERT Solutions for Class 9 Hindi",
    ],
  },
  {
    heading: "Reference Book Solutions",
    links: [
      "Reference Book Solutions",
      "HC Verma Solutions",
      "RD Sharma Solutions",
      "RS Aggarwal Solutions",
      "NCERT Exemplar Solutions",
      "Lakhmir Singh Solutions",
      "DK Goel Solutions",
      "TS Grewal Solutions",
      "Sandeep Garg",
    ],
  },
  {
    heading: "Competitive Exams",
    links: [
      "JEE Main",
      "JEE Advanced",
      "NEET",
      "Olympiad Preparation",
      "NDA",
      "KVPY",
      "NTSE",
    ],
  },
  {
    heading: "CBSE",
    links: [
      "CBSE Syllabus",
      "CBSE Sample Paper",
      "CBSE Worksheets",
      "CBSE Important Questions",
      "CBSE Previous Year Question Papers Class 12",
      "CBSE Previous Year Question Papers Class 10",
      "CBSE Important Formulas",
    ],
  },
  {
    heading: "ICSE",
    links: [
      "ICSE",
      "ICSE Solutions",
      "ICSE Class 10 Solutions",
      "ICSE Class 9 Solutions",
      "ICSE Class 8 Solutions",
    ],
  },
  {
    heading: "State Boards",
    links: [
      "State Boards",
      "AP Board",
      "Bihar Board",
      "Gujarat Board",
      "Karnataka Board",
      "Kerala Board",
      "Maharashtra Board",
      "MP Board",
      "Rajasthan Board",
      "Telangana Board",
      "TN Board",
      "UP Board",
      "WB Board",
    ],
  },
  {
    heading: "Free Study Material",
    links: [
      "Free Study Material",
      "Previous Year Question Paper",
      "Sample Papers",
      "JEE Main Study Material",
      "JEE Advanced Study Material",
      "NEET Study Materials",
      "Olympiad Study Material",
      "Kids Learning",
      "Ask Questions",
    ],
  },
  {
    heading: "Important Subjects",
    links: [
      "Physics",
      "Biology",
      "Chemistry",
      "Maths",
      "English",
      "Commerce",
      "Geography",
      "Civics",
    ],
  },
  {
    heading: "Revision Notes",
    links: [
      "Revision Notes",
      "CBSE Class 12 Notes",
      "CBSE Class 11 Notes",
      "CBSE Class 10 Notes",
      "CBSE Class 9 Notes",
      "CBSE Class 8 Notes",
    ],
  },
];

const Syllabus = () => {
  return (
    <div className="syllabus-container">
      {syllabusData.map((section, index) => (
        <div key={index} className="syllabus-section">
          <h2>{section.heading}</h2>

          <ul className="syllabus-links">
            {section.links.map((item, i) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Syllabus;
