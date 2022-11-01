import React from 'react'

import ServicesCard from './ServicesCard';

const Consultancy = ({about}) => {
    const CON_DATA = [
        {
          id: "/consultancy/con1",
          title: "Product Visualization & Strategy",
          image: "/image/servicesicons/supply-chain-1.svg",
          hImage: "/image/servicesicons/supply-chain.svg",
          bg:"/image/services/2479735.webp",
          discription:
            "We will bring to reality your business ideas by developing your software solutions from scratch. ",
        },
        {
          id: "/consultancy/con2",
          title: "Digital Transformation",
          image: "/image/servicesicons/network-connection-1.svg",
          hImage: "/image/servicesicons/network-connection.svg",
          bg:"/image/services/dtbg.jpg",
          discription:
            "Our consultants will help you leverage digitization to transform your business to come at par with digital economics.",
        },
        {
          id: "/consultancy/con3",
          title: "Digital Discovery Workshop ",
          image: "/image/servicesicons/ddw-1.svg",
          hImage:
          "/image/servicesicons/ddw.svg",
          bg:"/image/services/ddw.jpg",
          discription:
            "Plan your digital transformation roadmap through 1 week collaborative discovery workshops. ",
        },
      ];
      
  return (
    <>
           <ServicesCard data={CON_DATA} about={about}/>
    </>
  )
}

export default Consultancy