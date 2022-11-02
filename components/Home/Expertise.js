import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Expertise.module.css";
import { Fade } from "react-awesome-reveal";

const Expertise = () => {
  const EXPERTISE_DATA = [
    {
      id: "e2",
      title: "Networking",
      image: "/image/Networking.png",
      description:
        "Engage and retain customer through comprehensive customer relation management. Employ analytics and get insight into your business for improved decision making. Launch customized services for new business streams. Improve customer segmentation, foresee and spot challenges earlier.",
    },
    {
      id: "e3",
      title: "Retailing",
      image: "/image/Retail.png",
      description:
        "Ensure a profitable and lasting customer relationship by converting customer visits into purchases. Build up your customer relationships, create customer loyalty by increasing shopping experience with a 360 customer view, predict customer needs for optimization of stock levels and improve coordination.",
    },
    {
      id: "e4",
      title: "Electronics",
      image: "/image/Electronics.png",
      description:
        "Develop customized and innovative products and services. Collect and analyze data from connected devices by Internet of Things (IoT) for electronics. Know your customer liking and incorporate into your promotion strategy. Optimize factory operations with real-time control and fault detection.",
    },
    {
      id: "e5",
      title: "Healthcare",
      image: "/image/Healthcare.png",
      description:
        "Now organize your patients well and your appointments in advance by incorporating best healthcare practices.",
    },
    {
      id: "e6",
      title: "Business",
      image: "/image/Business.png",
      description:
        "Manage your business with the help of our exclusive apps like File-O, EMS and Pay'Em. These apps helps you run your day to day operations with utter ease.",
    },
  ];

  return (
    <div className={`${style.services} mx-auto setIndex1`}>
      <div className={`${style.serviceHead} mx-auto text-center`}>
        <p>Our Expertise</p>
        <p>
          CWare Technologies has always worked on innovative ideas to provide
          modern solutions to problems
        </p>
      </div>

      <div
        className={` row  m-0 pt-5`}
        style={{ borderBottom: "2px dashed #4797FF" }}
      >
        {EXPERTISE_DATA.slice(0, 3).map((e, index) => (
          <div
            className={`col-md-4 mx-auto mb-2 text-center ${style.cardCol}`}
            key={index}
          >
            <Fade cascade damping={0.1} direction={index===0?"left":index===1?"up":index===2?"right":"down"}>
            <div>
            <Image src={e.image} width={340} height={160} className="w-100" alt={e.title}  />
                <p style={{ fontSize: "20px" }}>{e.title}</p>
                <p>{e.description}</p>
            </div>
            </Fade>
    
          </div>
        ))}
      </div>

      <div className={` row  m-0  `}>
        {EXPERTISE_DATA.slice(3, 6).map((e, index) => (
          <div
            className={`col-md-6 mx-auto mb-2 text-center ${style.cardCol} `}
            key={index}
          >
            <Fade cascade damping={0.1} direction={index===0?"left":"right"}  className={`${style.Exp2ndCardCol}`}>
          
          
            <Image src={e.image} width={340} height={160} alt={e.title} className="w-100" />
                  <p style={{ fontSize: "20px" }}>{e.title}</p>
                  <p>{e.description}</p>
          
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
