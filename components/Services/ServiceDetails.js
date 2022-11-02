import React,{useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const ServiceDetails = ({ data, subData ,cons}) => {
  const [active, setAct] = useState(false);return (
    <>
      <div className="d-flex align-items-center ">
        <div>
          <Image src={data.logo} width={80} height={80} alt={data.logo} />
        </div>
        <div>
          <h3 className="m-0 ms-4">{data.title}</h3>
        </div>
      </div>
      <div className="row m-0 shadow bg-white setIndex1 p-2 text-center rounded my-2 align-items-center">
        <div className="col-md-8 p-md-4 text-secondary  ">
          <p>{data.para1}</p>
          {data.para2 && <p>{data.para2}</p>}
          {data.para3 && <p>{data.para3}</p>}
        </div>
        <div className="col-md-4">
          <Image src={data.image} width={300} height={300} alt={data.logo} className="w-100 h-100"/>
        </div>
      </div>

      {subData && subData.length > 0 && (
        <div className="row m-0 text-center mx-auto p-2 rounded my-2">
          {subData.map((e, index) => (
            <div className="col-md-4 mx-auto p-0 position-relative" key={index}>
              <div className="p-2">
                <div
                  className=" p-3 rounded shadow bg-white setIndex1 "
                  style={{
                    height: "300px",
                   
                  }}
                >
                  <Image src={e.image} width={40} height={40} alt={e.title} />
                  <p style={{ fontSize: "20px",color:"#000460" }}>{e.title}</p>
                  <p className="text-secondary ">{e.discription}</p>
                </div>
              </div>
              <div className="position-absolute bottom-0 w-100 mx-auto mb-4 text-center text-decoration-none">
                <Link href={`${e.link}`} className=" text-decoration-none">
                  Read More <BsArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {cons&&cons.length>0 && <>
        <div className="text-center my-4">
        <h4>Benefits</h4>
<h6>CWare Technologies helps you with</h6>
        </div><div className="row m-0 text-center mx-auto p-2 rounded my-2">
       
          {cons.map((e, index) => (
            <div className="col-md-4 mx-auto p-0 position-relative" key={index}>
              <div className="p-2">
                <div
                  className=" p-3 rounded shadow "
                  style={{
                    height: `${e.para1?"300px":"fit-content"}`,
                   
                  }}
                >
                  <Image src={e.logo} width={40} height={40} alt={e.logo} />
                  <p style={{ fontSize: "20px",color:"#000460" }}>{e.title}</p>
                  {e.para1&&<p className="text-secondary ">{e.para1}</p>}
                </div>
              </div>
             
            </div>
          ))}
        </div></>}
    </>
  );
};

export default ServiceDetails;
