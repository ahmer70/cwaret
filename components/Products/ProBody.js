import React from "react";
import { Fade } from "react-awesome-reveal";

import Image from "next/image";

function ProBody() {
  return (
    <>
      <>
        <div className="position-relative">
        <div className="container-md text-start ">
          <h2 className="mb-0" style={{ fontWeight: "400" }}>
            Workspace Collaboration & File Sharing{" "}
          </h2>
          <hr
            className="text-center mx-4 mt-0"
            style={{ width: "45%", border: " 2px dashed #4797FF", opacity: 1 }}
          />
        </div>
        <span
          className="bg-secondary position-absolute w-100 bottom-0"
          style={{ height: "50%" }}
        ></span>
        <Fade cascade damping={0.1} direction={"left"} className="  container-md mx-auto  p-2  position-relative">
          <div className="row m-0 mx-auto bg-white shadow rounded p-4">
            <div className="d-flex col-md-6 col-12 flex-column align-items-center">
              <Image
                src={"/image/File-O logo.svg"}
                alt="File-O"
                width={60}
                height={60}
                style={{
                  marginBottom: "12px",
                }}
              />
              <h3 style={{ color: "#4797FF" }}> File-O</h3>
              <p
                className=" text-center"
                style={{ color: "gray", fontSize: "20px" }}
              >
                File-O is a place where you and your team&apos;s <br /> content come
                together. Have quick access
                <br /> to all those contents that really matter. <br />
                Collabrate on team task and share within teams and to anyone
                outside. It is a file management, work-space collaboration and
                storage solution that provides synchronized services across
                multiple devices to teams and organizations of any size.
              </p>

              <button type="button"
                onClick={(e) => window.open("https://www.file-o.com")}
                className="linkBtn"
              >
                {" "}
                Visit Website
              </button>
            </div>
            <div className="col-md-5 col-12 ">
              <Image
                className="col-11"
                width={340}
                height={340}
                src={"/image/File-O Vector-min.png"}
                alt="File-O"
              />
            </div>
          </div>
        </Fade>
        </div>
        
      </>

      <div className=" align-items-center bg-secondary pb-5">
        <div className="container-md">
          <div className="d-flex justify-content-end flex-row p-4 position-relative">
            <div>
              <h2 className="mb-0" style={{ fontWeight: "400" }}>
                Powerful Way to Manage Your People
              </h2>
              <hr
                className="position-absolute  m-0"
                style={{
                  width: "40%",
                  right: "7%",
                  border: " 2px dashed #4797FF",
                  opacity: 1,
                }}
              />
            </div>
          </div>

          <Fade  cascade damping={0.1} direction={"right"} className="bg-white shadow rounded p-2  mx-auto">
            <div className="row m-0  align-items-center ">
              <div className="col-md-5 col-12  align-items-center">
                <Image
                  src={"/image/EMS Vector.svg"}
                  width={500}
                  height={500}
                  alt="EMS"
                />
              </div>
              <div className="d-flex col-md-6 col-12 flex-column align-items-center">
                <Image
                  src={"/image/EMS logo.svg"}
                  alt="EMS"
                  width={60}
                  height={60}
                  style={{
                    marginBottom: "12px",
                  }}
                />
                <h3 style={{ color: "#4797FF" }}> EMS</h3>
                <p
                  className=" text-center"
                  style={{ color: "gray", fontSize: "20px" }}
                >
                  Employee Management System (EMS) integrates <br /> all core
                  and strategic HR functions in a single system. <br />
                  These functions include employee manager. leave <br />
                  manager , asset manager, induction/exit manager,
                  <br /> employee eligibility manager, IT tickets manager,
                  expense manager etc. From hiring to firing, manage <br />
                  everything with the help of our <br />
                  Employee Management System.
                </p>
              </div>
            </div>
          </Fade>

          <div className="container-md text-start py-4 ">
            <h2 className="mb-0" style={{ fontWeight: "400" }}>
              Pay Your Employees on Time
            </h2>
            <hr
              className="text-center mx-4 mt-0"
              style={{
                width: "29%",
                border: " 2px dashed #4797FF",
                opacity: 1,
              }}
            />
          </div>
          <Fade cascade damping={0.1} direction={"left"} className="bg-white shadow rounded p-2 row m-0 mx-auto">
            <div className="row mx-auto m-0 align-items-center ">
              <div className="d-flex col-md-6 col-12 flex-column align-items-center">
                <Image
                  src={"/image/Pay'em logo.svg"}
                  alt="Pay'Em"
                  width={60}
                  height={60}
                  style={{
                    marginBottom: "12px",
                  }}
                />
                <h3 style={{ color: "#4797FF" }}> Pay&apos;Em</h3>
                <p
                  className=" text-center"
                  style={{ color: "gray", fontSize: "20px" }}
                >
                  Pay&apos;Em software is system that handles payroll services,
                  including payroll taxes, compensation, bonuses, contribution,
                  deductions, pay taxes, benefits management and tracks employee
                  record.
                </p>
              </div>
              <div className="col-md-6 col-12 ">
                <Image
                  src={"/image/Pay'em Vector-min.png"}
                  width={600}
                  height={500}
                  alt="Pay'Em"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
export default ProBody;
