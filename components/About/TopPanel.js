import React from "react";
import style from "./About.module.css";
import { Fade } from "react-awesome-reveal";
const TopPanel = () => {
  return (
   <>
    <div className="row m-0 p-0 ">
      <div className="col-md-5 p-0 m-0">
        <h1 className="gradientHeading">About Us</h1>
        <h3>Delivering Innovative Solutions</h3>
        <h5 className="text-secondary">
          We help organization re-engineer themselves to ever changing customer
          requirements by providing innovative technology solutions.
        </h5>
      </div>
    </div>

    <div className="row mb-0 mt-5 p-0 mx-auto">
      <div className="col-md-9 py-4 px-md-5 px-2 mx-auto text-center p-0 m-0 shadow bg-white setIndex1 rounded">
        
        <p className="borderHeading mb-4">Company</p>
        <Fade cascade direction="up">
        <h6 className="text-secondary">
        Cware Technologies is an independent IT Consulting and Engineering organization headquartered in Islamabad, Pakistan with Sales offices in Middle East.

        </h6>
        <h6 className="text-secondary">
        We present comprehensive tools and services to wide-ranging business so that anyone, novice or expert, can leverage technology and thrive. We help organization&#39;s re-engineer themselves to ever changing customer requirements.
        </h6>
        </Fade>
     
      </div>
    </div>

  
   </>
  );
};

export default TopPanel;
