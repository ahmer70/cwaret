import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Home.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
const Card2 = () => {
  const [HovDiv, setHovDiv] = useState(false)
  return (
    <div className={`${style.card2}`}>
      <div className="row m-0">
        <Fade cascade damping={0.1} direction={'left'}  className="col-md-6">
          <div   onMouseEnter={() => setHovDiv({[0]:true})}
        onMouseLeave={() => setHovDiv(false)}>
            <Image
              src={HovDiv[0]?"/image/Dedicated teams.svg":"/image/TeamBlack.svg"}
              width={100}
              height={50}
              alt="team"
            />
            <h5 className="mb-3">Build your Dedicated Teams</h5>
            <h6 className="mb-3">Our teams at your service</h6>
            <p>
              Get your projects fast-tracked with best technical and management
              talent. Increase quality and efficiency and retain complete
              control of teams.
            </p>
            <Link href="/contact">
             
                BUILD YOUR TEAM <BsArrowRight />
           
            </Link>
          </div>
        </Fade>
        <Fade cascade damping={0.1} direction={'right'}   className="col-md-6">
          <div  onMouseEnter={() => setHovDiv({[1]:true})}
        onMouseLeave={() => setHovDiv(false)}>
            <Image
              src={HovDiv[1]?"/image/7787535_qr_code_coding_programming_development_icon-white.svg":"/image/Blackfixedproject.svg"}
              width={100}
              height={50}
              alt="team"
            />

            <h5 className="mb-3">Fixed Price Project</h5>
            <h6 className="mb-3">We design and develope your vision</h6>
            <p>
              Get a comprehensive product development experience from design to
              delivery with reduced development costs.
            </p>
            <Link href="/contact">
         
                DEVELOP YOUR PRODUCT <BsArrowRight />
            
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Card2;
