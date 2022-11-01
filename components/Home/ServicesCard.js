import React, { useEffect, useRef, useState } from "react";
import style from "./Card.module.css";
// import "./animations.css";
import { GrCloudSoftware } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Fade } from "react-awesome-reveal";
const CARD_DATA = [
  {
    id: "c1",
    title: "Oracle Cloud Infrastructure",
    image: "/image/servicesicons/network-1.svg",
    hImage: "/image/servicesicons/network.svg",
    description:
      "Thinking of shifting to cloud? Let our team of certified developers help you move to the Oracle Cloud Infrastructure.",
    link: "/services/enterprise_solutions/es1",
  },
  {
    id: "c2",
    title: "Custom Software Solutions",
    image: "/image/servicesicons/layers.svg",
          hImage: "/image/servicesicons/layers-1.svg",
    description:
      "Build customized software applications for your startup, SMBs and enterprises.",
    link: "/services/software_development/sd1",
  },
  {
    id: "c3",
    title: "UI/UX Design",
    image: "/image/servicesicons/ux-design-1.svg",
    hImage:"/image/servicesicons/ux-design.svg",
    description:
      "Let our team of designers and developers help you design your digital product with customer centric approach.",
    link: "/services/software_development/sd2",
  },

  {
    id: "c4",
    title: "Siebel CRM",
    image: "/image/servicesicons/CRM.svg",
    hImage:  "/image/servicesicons/CRM-1.svg",
    description:
      "Engage our certified experts in business design , development, testing and EAI/EIM development.",
    link: "/services/enterprise_solutions/es2",
  },
  {
    id: "c5",
    title: "Digital Transformation ",
    image: "/image/servicesicons/network-connection-1.svg",
          hImage: "/image/servicesicons/network-connection.svg",
    description:
      "Our consultants will help you leverage digitization to transform your business to come at par with digital economies.",
    link: "/services/consultancy/con2",
  },
  {
    id: "c6",
    title: "Business Process Outsourcing ",
    image: "/image/servicesicons/engineering-1.svg",
    hImage: "/image/servicesicons/engineering.svg",
    description:
      "We enable our client to outperform with technology-based information Technology Enabled Services(ITES) business process outsourcing",
    link: "/services/enterprise_solutions/es5",
  },
  {
    id: "c7",
    title: "Digital Discovery Workshop ",
    image: "/image/servicesicons/ddw-1.svg",
    hImage:"/image/servicesicons/ddw.svg",
    description:
      "Plan your digital transformation roadmap through 1 week collaborative discovery workshops.",
    link: "/services/consultancy/con3",
  },
  {
    id: "c8",
    title: "Dedicated Teams",
    image:
      "/image/business_hierarchy_leadership_management_organization_icon.svg",
    hImage:
      "/image/473778_business_hierarchy_leadership_management_organization_icon-white.svg",
    description:
      "Leverage our recruitment capabilities and grow your team with our technical resources",
    link: "/services/dedicated_teams",
  },
];

const ServicesCard = ({ offset }) => {
  const [active, setAct] = useState(false),
    [actRow, setActRow] = useState(false);

  let robg;
  if (active) {
    robg = {
      backgroundImage: `${
        active === "c1"
          ? "url(/image/services/ocibg.jpg)"
          : active === "c2"
          ? "url(/image/services/cssbg.jpg)"
          : active === "c3"
          ? "url(/image/services/uiuxbg.png)"
          : active === "c4"
          ? "url(/image/services/crmbg.jpg)"
          : active === "c5"
          ? "url(/image/services/dtbg.jpg)"
          : active === "c6"
          ? "url(/image/services/pbobg.jpg)"
          : active === "c7"
          ? "url(/image/services/ddw.jpg)"
          : active === "c8"
          ? "url(/image/services/dtbg2.jpg)"
          : "url(/image/services/dtbg2.jpg)"
      }`,
      backgroundColor: "#cccccc",
 
      transition: ".5s",

      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
  } else {
    robg = {
      backgroundColor: "#ebf4fa",
    };
  }

  return (
    <div className={`${style.services} mx-auto container-md`}>
      <div className={`${style.serviceHead} mx-auto text-center`}>
        <p> Services we offer </p>
        <p>
          &#34;The sole reason we are in business is to make life less difficult
          for our clients&#34;
        </p>
      </div>

      <div
        className={`${style.cardRow} mx-auto position-relative`}
        style={robg}
        onMouseEnter={() => setActRow(true)}
        onMouseLeave={() => setActRow(false)}
      >
        <div className={` row ${style.cardRow1}  m-0`}>
          {CARD_DATA.slice(0, 4).map((e, index) => (
            <div
              onMouseEnter={() => setAct(e.id)}
              onMouseLeave={() => setAct(false)}
              className={`col-md-3 mx-auto text-center  py-5 ${style.cardCol} `}
              key={index}
            >
              <Fade cascade damping={0.1} direction={"up"} >
              <Link href={`${e.link}`}>
                <Image
                  src={actRow ? e.hImage : e.image}
                  width={40}
                  height={40}
                  alt={e.title}
                />
                <p className={`${active?"text-white":""}`}>{e.title}</p>
                <p className={`${active?"text-white":""}`}>{e.description}</p>
              </Link>
              </Fade>
              
            </div>
          ))}
        </div>

        <div className={`m-0 row `}>
          {CARD_DATA.slice(4, 8).map((e, index) => (
            <div
              onMouseEnter={() => setAct(e.id)}
              onMouseLeave={() => setAct(false)}
              className={`col-md-3 mx-auto text-center py-5 ${style.cardCol}`}
              key={index}
            >
              <Fade cascade damping={0.1} direction={"down"} >
              <Link href={`${e.link}`}>
                <Image
                  src={actRow ? e.hImage : e.image}
                  width={40}
                  height={40}
                  alt={e.title}
                />
                <p className={`${active?"text-white":""}`}>{e.title}</p>
                <p className={`${active?"text-white":""}`}>{e.description}</p>
              </Link>
              </Fade>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
