import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Gallery from "./Gallery";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";

const PodcastList = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="row m-0 ">
        {data.map((e, index) => (
          <div className="col-md-4 mb-5 " key={index}>
            <>
            <div  className="card  shadow  h-100  border-0"  >
              <>
              
                
             
              <Card.Body className="mt-0 p-0">
                <Fade cascade damping={0.1} direction={(index%2===0)?"up":"down"} >
                <div  className=" position-relative bg-light"> <Image
                  src={e.image}
                  width={220}
                  height={185}
                  alt={e.image}
                  className="rounded w-100"
                  // style={{backgroundColor:"rgb(0 0 0 / 13%)"}}
                />
                <div className="position-absolute top-0 end-0 text-center  ">
                  <span
                    className=" px-2 fs-6  top-0 text-center d-flex align-items-center justify-content-center  mb-1"
                    style={{
                      backgroundColor: "hsl(240deg 7% 62% / 77%)",
                      width: "fit-content",
                      height: "35px",
                      borderRadius: "3px",
                    }}
                  >
                    {e.heading}
                  </span>
                </div></div>
               <div className="p-3">
               <h5 className="mb-0 text-center " style={{ fontWeight: 500 }}>
                  {e.title}
                </h5>
                <hr
                  className="text-center d-flex justify-content-between   mt-0 px-5"
                  style={{
                    width: "100%",
                    border: "2px dashed #4797FF",
                    opacity: 1,
                  }}
                />
                <div>
                  {e.description && (
                    <p className="text-secondary">{e.description}</p>
                  )}
                  <p className="text-secondary">{e.date}</p>
                  {e.owner && <p className="text-secondary">{e.owner}</p>}
                </div>
               </div>
                </Fade>
            
              </Card.Body>
              <Card.Footer className="border-0 mb-2 bg-transparent text-center">
                <div className=" bottom-0">
                  {e.btn && (
                    <div>
                      <Link
                        href={e.link}
                        className=" linkBtn text-decoration-none"
                      >
                        {e.btn_name}{" "}
                      </Link>
                    </div>
                  )}
                  {e.is_gallery && (
                    <div>
                      <button
                        type="button"
                        onClick={() => setShow(e.slug)}
                        className="linkBtn text-decoration-none position-relative "
                        style={{ zIndex: 1 }}
                      >
                        View Gallery
                      </button>
                    </div>
                  )}
                </div>
          
              </Card.Footer>
              </>
            </div>
            </>
          </div>
        ))}
      </div>

      <Gallery show={show} setShow={setShow} />
    </>
  );
};

export default PodcastList;
