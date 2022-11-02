import React, { useState,useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import style from "./Menu.module.css";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ServicesList from "./ServicesList";
import ServiesListMb from "./ServiesListMb";
const NavbarMenu = ({ bggray ,contact}) => {
  const [IsServices, setIsServices] = useState(false);

  const [width, setWidth]   = useState(null);
const [height, setHeight] = useState(null);
const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
useEffect(() => {
  setWidth(window.innerWidth)
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

  return (
    <>
      {/* <Navbar bg="transparent" expand="lg" style={{ZIndex:1}}> */}
      <Navbar
        key={"md"}
        bg="transparent"
        expand={"md"}
        className=""
        sticky="top"
        style={{
          backgroundImage: " linear-gradient(to  right, black, #000460)",
        }}
      >
        <Container>
          <Navbar.Brand href="/">
           {!contact&& <Image
              src={"/image/cware-logo.png"}
              width={120}
              height={90}
              alt={"logo"}
            />}

          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}  style={{outline:"none",boxShadow:"none",border:"none"}}>
            <AiOutlineMenu className=" text-white" style={{fontSize:"50px"}}/>
          </Navbar.Toggle >

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-md-center align-items-md-center flex-grow-1 pe-3 ">
                
                {contact&& <div className={`${style.contactusdiv} `}>
                  <Nav.Link
                    href="/"
                    className={`${style.contactusbtn} text-md-center    text-start`}
                  >
                    HOME
                  </Nav.Link>
                </div>}
                <div className={`${style.contactusdiv} `}>
                  <Nav.Link
                    href="/about"
                    className={`${style.contactusbtn} text-md-center  text-start `}
                  >
                    ABOUT
                  </Nav.Link>
                </div>
                <div className={`${style.contactusdiv} ms-md-2 `}>
                  <Nav.Link
                    href="/products"
                    className={`${style.contactusbtn} text-md-center  text-start  `}
                  >
                    PRODUCTS
                  </Nav.Link>
                </div>

                <div className={style.mbservices}>
                    <ServiesListMb/>
                  </div><>
                  <div
                  className={`${style.contactusdiv} ${style.dtservices}  ms-md-2 position-relative`}
                  onMouseEnter={() => setIsServices(true)}
                  onMouseLeave={() => setIsServices(false)}
                >
                  <Nav.Link  href="/services"
                    className={`${style.contactusbtn} ${style.servicebtn} `}
                  >
                    SERVICES
                  </Nav.Link>
                 
                  
                  {IsServices && (
                    <div
                      className="shadow rounded d-flex  align-items-center  flex-column position-absolute start-50 end-50 "
                      style={{ zIndex: 1 }}
                    >
                   
                      <Image
                        src="/image/dd-arrow.png"
                        width={40}
                        height={20}
                        alt="dd-arrow"
                      />
                      <div
                        className={` ${style.servicesArrow} bg-white text-dark `}
                      >
                        <ServicesList />
                      </div>
                    </div>
                  )}
                </div>
                  </>
               
                <div className={`${style.contactusdiv}  ms-md-2`}>
                  <Nav.Link
                    href="/podcast"
                    className={`${style.contactusbtn} text-md-center  text-start`}
                  >
                    PODCAST
                  </Nav.Link>
                </div>
                <div className={`${style.contactusdiv} ms-md-2`}>
                  <Nav.Link
                    href="/contact"
                    className={`${style.contactusbtn} text-md-center text-start`}
                  >
                       GET IN TOUCH
                  </Nav.Link>
                </div>
              </Nav>
          
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
