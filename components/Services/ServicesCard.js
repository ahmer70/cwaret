import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Card from "react-bootstrap/Card";

const ServicesCard = ({ data,about }) => {
  const [active, setAct] = useState(false);

  const bgset = (bg, index) => {
    let robg;

    if (active && active === index) {
      robg = {
        backgroundImage: `url(${bg})`,
        backgroundColor: "#cccccc",
        transition: ".8s",
        // opacity: "1",
        // filter: "grayscale(80%)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      };
    } else {
      robg = {
        backgroundColor: `${about?"white":"rgb(220 220 224 / 66%)"}`,
      };
    }

    return robg;
  };
  return (
    <div className="container-md p-0 setIndex1 pb-5 ">
      <>
        <div className="row m-0 mt-3 ">
          {data.map((e, index) => (
            <div className="col-md-4 p-0 p-md-3  mb-3 text-center  " key={index}>
              <Link href={`/services${e.id}` } 
                className="position-relative text-center text-decoration-none text-secondary"
                onMouseEnter={() => setAct(index === 0 ? 100 : index)}
                onMouseLeave={() => setAct(false)}
              > 
                <Card
                  className=" p-3 rounded text-center  position-relative border-0 h-100"
                  style={{
                    
                    boxShadow: "rgb(108 108 127 / 38%) 4px 4px 4px 1px",
                    ...bgset(e.bg, index === 0 ? 100 : index),
                  }}
                >{active === (index === 0 ? 100 : index) &&<span className="w-100 h-100 position-absolute top-0 start-0 rounded" style={{backgroundColor: "#235374a8"}}></span>
                }
                  <div className="d-flex justify-content-center position-relative" style={{zIndex:1}}>
                  <Image
                    src={
                      active === (index === 0 ? 100 : index)
                        ? e.hImage
                        : e.image
                    }
                    width={40}
                    height={40}
                    alt={e.title}
                    className="mb-3 text-center "
                  />
                  </div>
                  <p className="position-relative" style={{ fontSize: "20px",zIndex:1 }}>{e.title}</p>
                  <Card.Body>
              
                  <p className="position-relative" style={{ zIndex:1 }}>{e.discription}</p>
                  </Card.Body>
                  <Card.Footer className="border-0 m-0 p-0 bg-transparent text-center">

                  <p
                    
                    className={`${
                      active === (index === 0 ? 100 : index) ? "text-white" : ""
                    } m-0 p-0 position-relative`}
                    style={{ zIndex:1 }}>
                    Read More <BsArrowRight />
                  </p>
                  </Card.Footer>
                </Card>
                
              </Link>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default ServicesCard;
