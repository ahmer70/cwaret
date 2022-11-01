import React from "react";

const ServicesNav = ({OpenS,setOpenS,serv}) => {
  return (
    <>

      <div className={` row  m-0   text-center `}>
        <div
          className={`${serv?"col-md-10":"col-md-8 px-0"} py-2 rounded mx-auto setIndex1`}
          style={{
            backgroundImage:
              "linear-gradient(to right, #1339a3, #000460,#1339a3)",
          }}
        >
          <nav className="">
            <ul className="list-group   list-group-horizontal border-0 mx-auto">
              <li className="list-group-item bg-transparent border-top-0 border-0   border-end border-2 border-white">
                <button
                  type="button"
                  className={`{} bg-transparent text-white  fs-5 border-0   ${OpenS==='SD'?"border-bottom border-2 border-white":""} `}
                  onClick={()=>setOpenS('SD')}
                >
                  Software Development
                </button>
              </li>

              <li className="list-group-item bg-transparent border-top-0 border-0   border-end border-2 border-white">
                <button
                  type="button"
                  className={`{} bg-transparent text-white fs-5 border-0 ${OpenS==='ES'?"border-bottom border-2 border-white":""}`}
                  onClick={()=>setOpenS('ES')}
                >
                  Enterprise Solutions
                </button>
              </li>
              <li className="list-group-item bg-transparent border-top-0 border-0   border-end border-2 border-white">
                <button
                  type="button"
                  className={` bg-transparent text-white fs-5 border-0 ${OpenS==='ET'?"border-bottom border-2 border-white":""}`}
                  onClick={()=>setOpenS('ET')}
                >
                  Emerging Technologies
                </button>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <button
                  type="button"
                  className={`{} bg-transparent text-white fs-5 border-0 ${OpenS==='C'?"border-bottom border-2 border-white":""}`}
                  onClick={()=>setOpenS('C')}
                >
                  Consultancy
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ServicesNav;
