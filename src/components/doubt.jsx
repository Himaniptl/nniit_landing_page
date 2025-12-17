import { useState } from "react";
import assets8 from "../NNIIT_Landing_Page_Assets/assets8.jpg";
import "./doubt.css";
import DemoModal from "../components/DemoModal";

const Doubt = () => {
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <div className="doubt-wrapper">
      <div className="doubt-container">
        {/* LEFT */}
        <div className="doubt-left">
          <h1>
            <span className="blue">
              Doubts<span className="red">?</span>
            </span>{" "}
            <span className="blue">
              Confusion<span className="red">?</span>
            </span>
            <br />
            Not Anymore!
          </h1>

          <p className="subtitle">
            A learning <br />
            experience built <br />
            just for <strong>YOU</strong>
          </p>

          <button
            className="demo-btn"
            onClick={() => setOpenDemo(true)}
          >
            Book a Free Demo
          </button>
        </div>

        {/* CENTER */}
        <div className="doubt-center">
          <img
            src={assets8}
            alt="doubt"
            className="doubt-image"
          />
        </div>

        {/* RIGHT */}
        <div className="doubt-right">
          <p>
            Get one-on-one guidance <br />
            from India's best <br />
            IIT mentors, and unlock <br />
            absolute clarity. Book <br />
            your free demo now!
          </p>
        </div>
      </div>

      
      <DemoModal
        open={openDemo}
        onClose={() => setOpenDemo(false)}
      />
    </div>
  );
};

export default Doubt;
