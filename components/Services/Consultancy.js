import React from 'react'

import ServicesCard from './ServicesCard';

const Consultancy = () => {
    const CON_DATA = [
        {
          id: "/consultancy/con1",
          title: "Product Visualization & Strategy",
          image: "/image/supply-chain.svg",
          hImage:"/image/servieshovericon/co/pvs.svg",
          bg:"/image/services/2479735.webp",
          discription:
            "We will bring to reality your business ideas by developing your software solutions from scratch. ",
        },
        {
          id: "/consultancy/con2",
          title: "Digital Transformation",
          image: "/image/network-connection.svg",
          hImage: "/image/network-connection-white.svg",
          bg:"/image/services/dtbg.jpg",
          discription:
            "Our consultants will help you leverage digitization to transform your business to come at par with digital economics.",
        },
        {
          id: "/consultancy/con3",
          title: "Digital Discovery Workshop ",
          image: "/image/business_factory_location_manufactory_plant_icon.svg",
          hImage:
          "/image/1530084_business_factory_location_manufactory_plant_icon-white.svg",
    
          bg:"/image/services/ddw.jpg",
          discription:
            "Plan your digital transformation roadmap through 1 week collaborative discovery workshops. ",
        },
      ];
      
  return (
    <>
           <ServicesCard data={CON_DATA}/>
    </>
  )
}

export default Consultancy