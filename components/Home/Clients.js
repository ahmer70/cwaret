import React from "react";
import Image from "next/image";
import style from "./Card.module.css";
import { Rotate } from "react-awesome-reveal";
// import "./animations.css";
const Clients = ({ about }) => {
  let arr = [
    {
      name: "Waleed Dental",
      image: "/image/waleed-dental-logo.jpg",
    },

    {
      name: "Kirr",
      image: "/image/kirr-logo.png",
    },

    {
      name: "Rastgar Engineering",
      image: "/image/rastagar-logo.png",
    },

    {
      name: "Rastgar Air Compressor",
      image: "/image/rastagar-ac-logo.png",
    },
    {
      name: "Extra",
      image: "/image/extraa-logo.svg",
    },
  ];
  return (
    <div className={`${style.services} mx-auto mb-5 container-md`}>
      <div className={`${style.serviceHead} mx-auto text-center`}>
        <p>Our Clients </p>
      </div>

      <div
        className={`row m-0 mx-auto text-center ${
          about ? "rounded shadow bg-white py-4  px-2 mt-3 " : "pt-4"
        }  `}
      >
        {arr.map((e, index) => (
          <Rotate cascade damping={0.1} duration={2000} className="col" key={index}>
            <div   className="rounded shadow p-3" style={{ height: "130px" }}>
             
             <Image src={e.image} width={100} height={50} alt={e.image} />
              <h6>{e.name}</h6>
             
            </div>
          </Rotate>
        ))}
      </div>
    </div>
  );
};

export default Clients;
