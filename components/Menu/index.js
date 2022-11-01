import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import style from "./Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import TopBar from "./TopBar";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import ServicesList from "./ServicesList";

const NavbarMenu = ({ bggray }) => {
  const [IsServices, setIsServices] = useState(false);
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
            <Image
              src={"/image/cware-logo.png"}
              width={120}
              height={90}
              alt={"logo"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center align-items-center flex-grow-1 pe-3 ">
                <div className={`${style.contactusdiv} `}>
                  <Nav.Link
                    href="/about"
                    className={`${style.contactusbtn}  `}
                  >
                    ABOUT
                  </Nav.Link>
                </div>
                <div className={`${style.contactusdiv} ms-2 `}>
                  <Nav.Link
                    href="/products"
                    className={`${style.contactusbtn} `}
                  >
                    PRODUCTS
                  </Nav.Link>
                </div>
                <div
                  className={`${style.contactusdiv}  ms-2 position-relative`}
                  onMouseEnter={() => setIsServices(true)}
                  onMouseLeave={() => setIsServices(false)}
                >
                  <Nav.Link  href="/services"
                    className={`${style.contactusbtn} ${style.servicebtn}  text-white`}
                  >
                    SERVICES
                  </Nav.Link>
                  {IsServices && (
                    <div
                      className="shadow rounded d-flex  align-items-center justify-content-center flex-column position-absolute start-50 end-50 "
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
                <div className={`${style.contactusdiv}  ms-2`}>
                  <Nav.Link
                    href="/podcast"
                    className={`${style.contactusbtn} `}
                  >
                    PODCAST
                  </Nav.Link>
                </div>
                <div className={`${style.contactusdiv}  ms-2`}>
                  <Nav.Link
                    href="/contact"
                    className={`${style.contactusbtn} `}
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
