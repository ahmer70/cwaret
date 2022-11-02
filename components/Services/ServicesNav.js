import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineMenu } from "react-icons/ai";

const ServicesNav = ({OpenS,setOpenS,serv}) => {
  return (
    <>
       <div className="container-md mx-auto px-4">
 <Navbar className={` py-3 rounded mx-md-auto setIndex1`}
          style={{
            backgroundImage:
              "linear-gradient(to right, #1339a3, #000460,#1339a3)",
          }} expand="lg">
   
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 ms-auto" style={{outline:"none",boxShadow:"none"}} >
        <AiOutlineMenu className=" text-white" style={{fontSize:"40px"}}/>
       </Navbar.Toggle>
       
        <Navbar.Collapse id="basic-navbar-nav">



          <Nav className="mx-auto">
          <ul className="d-md-flex  justify-content-md-center  align-items-md-center mb-0  border-0 mx-md-auto">
              <li className="list-group-item bg-transparent px-md-3 border-top-0 border-0   border-end border-2 border-white">
                <button
                  type="button"
                  className={`{} bg-transparent text-white  fs-5 border-0   ${OpenS==='SD'?"border-bottom border-2 border-white":""} `}
                  onClick={()=>setOpenS('SD')}
                >
                  Software Development
                </button>
              </li>

              <li className="list-group-item bg-transparent px-md-3 border-top-0 border-0   border-end border-2 border-white">
                <button
                  type="button"
                  className={`{} bg-transparent text-white fs-5 border-0 ${OpenS==='ES'?"border-bottom border-2 border-white":""}`}
                  onClick={()=>setOpenS('ES')}
                >
                  Enterprise Solutions
                </button>
              </li>
              <li className="list-group-item bg-transparent px-md-3 border-top-0 border-0   border-end border-2 border-white">
                <button
                  type="button"
                  className={` bg-transparent text-white fs-5 border-0 ${OpenS==='ET'?"border-bottom border-2 border-white":""}`}
                  onClick={()=>setOpenS('ET')}
                >
                  Emerging Technologies
                </button>
              </li>
              <li className="list-group-item bg-transparent px-md-3 border-0">
                <button
                  type="button"
                  className={`{} bg-transparent text-white fs-5 border-0 ${OpenS==='C'?"border-bottom border-2 border-white":""}`}
                  onClick={()=>setOpenS('C')}
                >
                  Consultancy
                </button>
              </li>
            </ul>
           
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>

      {/* <div className={` container-md mx-auto    text-center `}>
        <div
          className={` py-2 rounded mx-auto setIndex1`}
          style={{
            backgroundImage:
              "linear-gradient(to right, #1339a3, #000460,#1339a3)",
          }}
        >
          <nav className="text-center">
            
          </nav>
        </div>
      </div> */}
    </>
  );
};

export default ServicesNav;
