import React from "react";

import Link from "next/link";
import Image from "next/image";
function MainFooter() {
  return (
    <>
      <footer className="home-footer position-relative " style={{ zIndex: 1 }}>
        <div className="home-footer-primary col-lg-4 col-12">
          <h5 className="home-footer-primary-tile">
            CWare <br /> Technologies
          </h5>
          <p style={{ color: "gray", marginRight: "auto", marginLeft: "50px" }}>
            CWare Technologies is an <br /> independent IT Consulting <br /> and
            Engineering organization <br /> headquartered in Islamabad, <br />{" "}
            Pakistan
          </p>
        </div>
        <div className="home-footer-secondary col-lg-4 col-12 ">
          <h6 className="home-footer-secondary-title">Contacts</h6>
          <hr
            style={{ width: "40%", marginRight: "50px", marginLeft: "50px" }}
          />
          <h6 style={{ marginRight: "auto", marginLeft: "50px" }}>Email:</h6>
          <p style={{ marginRight: "auto", marginLeft: "50px", color: "gray" }}>
            {" "}
            
            <a href="mailto:info.cwaret@cwaret.com" className="text-secondary text-decoration-none">info.cwaret@cwaret.com</a>
          </p>
          <br />
          <h6 style={{ marginRight: "auto", marginLeft: "50px" }}>Phone:</h6>
          <p style={{ marginRight: "auto", marginLeft: "50px", color: "gray" }}>
            
            <a href="tel:051873115455" className="text-secondary text-decoration-none">051-8731154-55</a>
          </p>
        </div>
        <div className="home-footer-newsletter col-lg-4 col-12">
          <h6
            style={{
              marginRight: "auto",
              marginLeft: "50px",
              marginTop: "30px",
            }}
          >
            Our Newsletter
          </h6>
          <hr
            style={{ width: "40%", marginRight: "50px", marginLeft: "50px" }}
          />
          <p style={{ color: "gray", marginRight: "50px", marginLeft: "50px" }}>
            Register your email for our daily <br /> news
          </p>
          <form className="home-footer-form">
            <div className="input-group  bg-transparent pb-0">
              <span className="input-group-text bg-transparent pb-0 border-0">
                <Image
                  src={"/image/envelope.svg"}
                  alt="Envelope"
                  width={20}
                  height={20}
                />
              </span>
              <input
                type="email"
                id="fname"
                placeholder="Email Address"
                className="form-control home-footer-form-input bg-transparent border-0"
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text bg-transparent border-0  p-0 m-0">
                {" "}
                <input
                  type="submit"
                  value="Send"
                  className="home-footer-form-btn"
                />
              </span>
            </div>
          </form>
        </div>
      </footer>
      <div className="home-footer-copywright">
        {" "}
        <p>
          <span style={{ color: "gray" }}>&#169;</span>{" "}
          <span style={{ color: "gray" }}>Copyright </span>CWare Technologies,{" "}
          <span style={{ color: "gray" }}>All Right Reserved.</span>
        </p>
      </div>
    </>
  );
}
export default MainFooter;
