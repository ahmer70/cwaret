import React,{useRef} from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

import style from './Slider.module.css'
import Marquee from "react-fast-marquee";

const Slider = () => {


  return (
    <div className={`${style.setBg} position-relative d-flex align-items-center rounded` }  style={{zIndex:1}} >
        <Marquee  speed={200} pauseOnClick={true} pauseOnHover={true}>
  <div className='m-3'><Image src="/image/Image1.png" width={500} height={300} alt="project_image"/></div>
  <div className='m-3'><Image src="/image/Image2.png" width={500} height={300} alt="project_image"/></div>
  <div className='m-3'><Image src="/image/Image3.png" width={500} height={300} alt="project_image"/></div>
  <div className='m-3'><Image src="/image/Image4.png" width={500} height={300} alt="project_image"/></div>

</Marquee>
    </div>
  )
}

export default Slider