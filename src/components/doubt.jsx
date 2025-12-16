import react from "react";
import assets8 from "../NNIIT_Landing_Page_Assets/assets8.jpg";
import "./doubt.css";

const Doubt = () => {
    return (
        <div className="doubt-wrapper">
            <div className="doubt-container">

                {/* LEFT */}
                <div className="doubt-left">
                    <h1>
                        <span className="blue">
                        Doubts<span className="red">?</span>
                        </span>{" "} <span className="blue"> Confusion<span className="red">?</span>
                        </span>
                        <br />
                        Not Anymore!
                        </h1>


                     <p className="subtitle">
                        A learning <br/>
                        experience built <br />
                        just for <strong>YOU</strong>
                     </p>


                     <button className="demo-btn">Book a Free Demo</button>
                </div>


                {/* CENTER */}
                <div className="doubt-center">
                    <img
                    src={assets8}
                    alt="doubt image"
                    className="doubt-image"
/>

                </div>

                {/*RIGTH*/}
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
        </div>
    )
}

export default Doubt;