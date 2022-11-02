import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Image from "next/image";

import { useEffect, useState } from "react";
// import axios from "axios";
import Alert from "react-bootstrap/Alert";
// import  EmailTemp from "./Email";
import style from './Contact.module.css'
function RightPanel({ i }) {
  const [width, setWidth] = useState(0),
    [Message, setMessage] = useState(false),
    [toggle, settoggle] = useState(false);
  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  });
  const updateWindowDimensions = () => setWidth(window.innerWidth);
  const formdata = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // let res = await axios.post(
    //   "https://www.cwaret.com/api/contact/email/deliver",
    //   form
    // );
    emailjs
      .sendForm(
        "service_ofdy6sq",
        "template_hsc4zf9",
        formdata.current,
        "Yfe9oGxs_kNEgVFX_"
      )
      .then(
        (result) => {
          if (result.text) {
            setMessage(true);
            setForm({ email: "", name: "", message: "" });
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [Message]);

  return (
    <div className="setIndex1 p-2">
      <div className="setIndex1">
        <h4 className="gradientHeading2">Contact Us</h4>
        {/* <h4 className="Contact-Background-Discription">
              Fill up the form and our team will get <br />
              back to you within 24 hours
            </h4> */}
      </div>
      <div className=" d-flex flex-column flex-wrap align-items-center ">
        <Image
          className="contact-Envelope"
          src={"/image/email.png"}
          width={50}
          height={50}
          alt="Envelope"
        />
        <a href="mailto:info.cwaret@cwaret.com " className={`fs-3 ${style.mail}`}>
          info.cwaret@cwaret.com
        </a>

        <br />
        <p  className={`fs-5 ${style.title}`}>
          Any question or remarks? just write us a message
        </p>
      </div>

      <form ref={formdata} onSubmit={handleSubmit}>
        <div className="row m-0 p-0 align-items-center mb-3">
          <div className=" col-md-2 col-12 mt-2 p-2">
            <label
              htmlFor="fname"
              className={style.label}
              style={{  fontWeight: "600", fontSize: "18px" }}
            >
              Name:
            </label>
          </div>
          <div className=" col-md-10 col-12  p-2">
            <input
              required
              name="name"
              value={form.name}
              onChange={(e) => handleInput(e)}
              type="text"
              id="fname"
              className="p-2 border rounded border-info "
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <div>
          <div className="row m-0 p-0 align-items-center mb-3">
            <div className="col-md-2">
              <label
               className={style.label}
                htmlFor="email"
                style={{  fontWeight: "600", fontSize: "18px" }}
              >
                Email:
              </label>
            </div>

            <div className="col-md-10">
              <input
                required
                name="email"
                value={form.email}
                onChange={(e) => handleInput(e)}
                type="email"
                id="email"
                className="p-2 border rounded border-info "
                style={{
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>

        <div className="row m-0 p-0 align-items-center mb-3">
          <div className="col-md-2">
            <label
             className={style.label}
              htmlFor="messagebox"
              style={{ fontWeight: "600", fontSize: "18px" }}
            >
              Message:
            </label>
          </div>
          <div className="col-md-10">
            <textarea
              required
              name="message"
              value={form.message}
              onChange={(e) => handleInput(e)}
              rows="3"
              className="p-2 border rounded border-info w-100"
            />
          </div>
        </div>
        <div className="row m-0 mx-auto">
          <div className="col-md-2"></div>
          <div className="col-md-10 mx-auto text-center">
            <input
              type="submit"
              value="Send Message"
              className="mt-5 col-lg-4 col-12 p-2  text-center contact-messagebox-input rounded"
            />
          </div>
        </div>
      </form>

      {Message && (
        <Alert variant="success">
          Your message has been sent. our team will get back to you within 24
          hours
        </Alert>
      )}
    </div>
  );
}
export default RightPanel;
