import React from "react";
import Menu from "../components/Menu";
import MainFooter from "../components/Home/MainFooter";
import PodcastList from "../components/Podcast/PodcastList";

let list = [
  {
    id: 1,
    heading: "Conference on SDGs",
    image: "/image/RT2/11.jpeg",
    title:
      "Round table Conference on Human Security and Sustainable Development Goals",
    description:
      "Conference held at COPAIR involving founder of Digital Pakistan Mr.Ammar Jaffri & The President & Founder Of COPAIR Ms. Amna Munawwar Awan",
    owner: null,
    date: "September 22, 2022",
    is_gallery: true,

    slug: "rt2",
    btn: null,
    btn_name: null,
    link: null,
  },
  {
    id: 2,
    heading: "Emerging Technologies",
    image: "/image/RT1/9.jpeg",
    title:
      "Round table Conference on Emerging Technology: A Mega Trend of the New World Order",
    description:
      "Conference held at COPAIR involving founder of Digital Pakistan Mr.Ammar Jaffri & The President & Founder Of COPAIR Ms. Amna Munawwar Awan",
    owner: null,
    date: "September 21, 2022",
    is_gallery: true,
    slug: "rt1",
    btn: null,
    btn_name: null,
    link: null,
  },
  {
    id: 3,
    heading: "MoU Signing Ceremony",
    image: "/image/mou/2.jpeg",
    title: "MoU Signing Ceremony between SDGs Academy & CWare Technologies",
    description:
      "MoU signing ceremony was held at SDGs Academy main office. CWare Technologies is a technical partner for the development of SDGs Database",
    owner: null,
    date: "July 22, 2022",
    is_gallery: true,
    slug: "mou",
    btn: null,
    btn_name: null,
    link: null,
  },
  {
    id: 4,
    heading: "Inauguration of SDG",
    image: "/image/skandkans.svg",
    title:
      "Inauguration of SDG Database in first ever National Dialogue on SDG's in Pakistan",
    description: "SDG's Dialogue held in Jinnah Auditorium NUST University",
    owner: null,
    date: "March 16 & 17, 2022",
    is_gallery: true,
    slug: "nust",
    btn: null,
    btn_name: null,
    link: null,
  },
  {
    id: 5,
    heading: "SDG's Database",
    image: "/image/sdgs-academy (2).svg",
    title:
      "CWare Tech partnership with SDG Academy for the development of first ever SDG's database of Pakistan",
    description: null,
    owner: null,
    date: "January 1, 2022",
    is_gallery: null,
    btn: null,
    btn_name: null,
    link: null,
  },
  {
    id: 6,
    heading: "EXTRA",
    image: "/image/extraa-logo.svg",
    title:
      "CWare Tech wins Siebel apps support contract for the third consecutive year with Extra KSA",
    description: null,
    owner: null,
    date: "January 1, 2022",
    is_gallery: null,
    btn: null,
    btn_name: null,
    link: null,
  },
  {
    id: 7,
    heading: "File-O",
    image: "/image/logo fileo.svg",
    title:
      "CWare launch beta version of upcoming workspace collaboration app File-O.",
    description:
      "To register as a beta user and get lifetime offer to File-O app, Sign up now.",
    owner: null,
    date: "December 14, 2021",
    is_gallery: null,
    btn: true,
    btn_name: "Sign Up Now",
    link: "https://www.file-o.com/free-trial/drive",
  },
  {
    id: 8,
    heading: "ORACLE",
    image: "/image/Group 6458.svg",
    title: "CWare becomes SaaS player with MySQL Database Service",
    description:
      "CWare powers its File-O solution with MySQL Database Service on Oracle Cloud Infrastructure.",
    owner: "Ousaid Imtiaz, CEO, CWare Technologies",
    date: "December 7, 2021",
    is_gallery: null,
    btn: true,
    btn_name: "Learn More",
    link: "https://www.oracle.com/customers/cware-technologies/",
  },
  {
    id: 9,
    heading: "ASEAN Cloud Connect",
    image: "/image/owais.png",
    title: "Power Your Cloud Service with MySQL HeatWave",
    description:
      "How our ISV partner power up their cloud service with real time insights, lower 66% of cost and improve performance upto 5400x with MySQL HeatWave.",
    owner: "Ousaid Imtiaz, CEO, CWare Technologies",
    date: "November 17, 2021",
    is_gallery: null,
    btn: true,
    btn_name: "Register",
    link: "https://tmt.knect365.com/asean-cloud-connect/agenda-1/",
  },
];
const Podcast = () => {
  var today = new Date("2021-10-06"); // yyyy-mm-dd
  var month = today.toJSON().split("T");
  console.log("month", month);
  return (
    <>
      <Menu bggray={true} />
      <div className="container-md my-5">
        <div className="row m-0 p-0  mt-4">
          <div className="col-md-5 p-0 m-0">
            <h1 className="gradientHeading">Podcast</h1>
            <h3>
              Get updated about everything happening here through our Podcasts
            </h3>
          </div>
        </div>
        <div className="d-sm-flex pe-4 justify-content-between align-items-center">
          <div>
            <h5 className="text-secondary">Listen, Entertain and Educate</h5>
          </div>
          <div>
            {" "}
            <h6 className="text-secondary">Last Update: {month[0]}</h6>
          </div>
        </div>
      </div>
      <div className="position-relative ">
        <span
          className=" position-absolute w-100 bottom-0"
          style={{ height: "80%", backgroundColor: "hsl(0deg 0% 0% / 10%)" }}
        ></span>
        <div className="container-md py-5 p-0 ">
          <PodcastList data={list} />
        </div>
      </div>

      <MainFooter />
    </>
  );
};

export default Podcast;
