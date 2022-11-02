import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const WhatWeDo = () => {
  return (
    <>
      <div className="row mb-0 p-0 mx-auto setIndex1">
        <div className="col-md-9 py-4 px-md-5 px-2 mx-auto text-center p-0 m-0 ">
          <p className="borderHeading mb-4">What We Do?</p>
          <div className="shadow rounded bg-white p-4">
            <Fade cascade direction="up">
            <h6 className="mb-3">
              In today&#39;s competing business world it is impossible to succeed
              without knowing your customer well. With our specialized customer
              oriented software&#39;s you can achieve high customer retention and
              satisfaction by knowing and engaging your customers/clients in an
              efficient way.
            </h6>
            <h6 className="">
              We are offering softwares&#39;s for a wide ranging of industries to
              better manage their employees and build long term relationships
              with them. Our software&#39;s are helping businesses to collaborate
              within the organization with ease and effectiveness. Now managing
              the payroll, attendance and files within organization is as easy
              and as you like them to be.{" "}
            </h6>
            </Fade>
           
          </div>
        </div>
      </div>
      <div className="gradientbg rounded  setIndex1">
        <div className="container-md mx-auto text-center">
        <div className="row m-0 p-4 align-items-center">
          <div className="col-sm-7 p-0 m-0 text-center">
              <h3>Ready to Start your Project?</h3>
            </div>
            <div className="col-sm-3  p-0 m-0">
              <Link href={"/contact"} className="text-decoration-none text-white ltabout  ">
                
                  Let&#39;s Talk
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
