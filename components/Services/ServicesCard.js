import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const ServicesCard = ({ data }) => {
  
  const [active, setAct] = useState(false);

  

const bgset=(bg,index)=>{

  let robg;

if (active&&active===index) {
  
  robg = {
    backgroundImage: `url(${bg})`,
    backgroundColor: "#cccccc",
    transition: ".8s",
    // opacity: "1",
    // filter: "grayscale(80%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color:"white"
  };
 
} else {
  robg = {
    backgroundColor: "hsl(240deg 6% 87%)",
  };
}

return robg
}
  return (
    <div className="row m-0  setIndex1 ">
      <div className="col-md-10 m-0 p-0 mx-auto text-center">
        <div className="row m-0 ">
          {data.map((e, index) => (
            <div className="col-md-4 p-0 p-2 " key={index} >
              <div className="position-relative" onMouseEnter={() => setAct(index===0?100:index)}
            onMouseLeave={() => setAct(false)}>
              <div
                className=" p-3 rounded "
                
                style={{
                    height: "300px",
                  boxShadow: "5px 5px 4px 1px hsl(240deg 8% 46% / 53%)",
                  ...bgset(e.bg,index===0?100:index)
                }}
              >
                <Image src={active===(index===0?100:index)?e.hImage:e.image} width={40} height={40} alt={e.title} />
                <p style={{ fontSize: "20px" }}>{e.title}</p>
                <p>{e.discription}</p>

                
              </div>
              <div className="position-absolute bottom-0 w-100 mx-auto mb-4 text-center text-decoration-none">
                <Link href={`/services${e.id}`} className={`${active===(index===0?100:index)?"text-white":""} text-decoration-none`}>
              
                    Read More <BsArrowRight />
                 
                </Link>
                </div>
              </div>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
