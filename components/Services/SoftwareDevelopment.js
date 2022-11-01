import React from 'react'


import ServicesCard from './ServicesCard';

const SoftwareDevelopment = () => {

  const SD_DATA = [
    {
      id: "/software_development/sd1",
      title: "Custom Software Solutions",
      image: "/image/layers.svg",
      bg:"/image/services/cssbg.jpg",
      hImage:"/image/layers-white.svg",

      discription:
        "Build customized software applications for your startup. SMBs and enterprise. ",
    },
    {
      id: "/software_development/sd2",
      title: "UI/UX Design",
      image: "/image/ux-design.svg",
      hImage:"/image/servieshovericon/sd/uiux.svg",
      bg:"/image/services/uiuxbg.png",
      discription:
        "Let our team of designers and developers help you design your digital product with customers centric approach. ",
    },
    {
      id: "/software_development/sd3",
      title: "Product Visualization and Strategy",
      image: "/image/product.svg",
      hImage:"/image/servieshovericon/sd/pvds.svg",

      bg:"/image/services/2479735.webp",
      discription:
        "We will bring to reality your business ideas by developing your software solutions from scratch.",
    },
    {
      id: "/software_development/sd4",
      title: "QA & Testing",
      image: "/image/Group 6068.svg",
      hImage:"/image/servieshovericon/sd/qa.svg",
      bg:"/image/services/standards-quality-assurance-control-standardisation-certification-concept-144187423.jpg",
      discription:
        "Already developed a software? Our QA experts will make sure it is robust, reliable and error-free.",
    },
    {
      id: "/software_development/sd5",
      title: "Embedded Development",
      image: "/image/rise.svg",
      hImage:"/image/servieshovericon/sd/embd.svg",
      bg:"/image/services/Software-Development.jpg",
      discription: "Get connected with our dedicated RTOS developers.",
    },
  
    {
      id: "/software_development/sd6",

      title: "Dev Ops Practice",
      image: "/image/web-development.svg",
      hImage:"/image/servieshovericon/sd/devops.png",
      bg:"/image/services/360_F_282378637_7DL904AvZkZovk3RqLdLwNe21RNcjpzg.jpg",
      discription:
        "Improve the quality and speed of application delivery with our DevOps consulting services. ",
    },
  ];
  return (
    <>
       <ServicesCard data={SD_DATA} />
    </>
  )
}

export default SoftwareDevelopment