import React from 'react'

import ServicesCard from './ServicesCard';
const EmergingTechnologies = () => {
    const ET_DATA = [
        {
          id: "/emerging_technologies/et1",
          title: "Big Data",
          image: "/image/big-data.svg",
          hImage:"/image/servieshovericon/et/bd.svg",
          bg:"/image/services/istockphoto-1279887071-170667a.jpg",
          discription:
            "Make correct decision by automated reporting that are data driven to provide valuable insights.",
        },
        {
          id: "/emerging_technologies/et2",
          title: "Internet of Things (IoT)",
          image: "/image/noun_internet of things_1228694.svg",
          hImage:"/image/servieshovericon/et/iot.svg",
          bg:"/image/services/1.jpg",
          discription:
            "Get valuable insights by deploying IoT related solutions that connects technology, processes and people.",
        },
        {
          id: "/emerging_technologies/et3",
          title: "Machine Learning",
          image: "/image/neural.svg",
          hImage:"/image/servieshovericon/et/rmc.svg",
          bg:"/image/services/istockphoto-966248982-612x612.jpg",
          discription:
            "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms.",
        },
        {
          id: "/emerging_technologies/et4",
          title: "Healthcare",
          image: "/image/cardiogram.svg",
          hImage:"/image/servieshovericon/et/hc.svg",
          bg:"/image/services/istockphoto-1327568875-170667a.jpg",
          discription:
            "Ensure timely and correct procedure through a well-organized software that will help in diagnosis.",
        },
      ];
      
  return (
    <>
<ServicesCard data={ET_DATA} />
    </>
  )
}

export default EmergingTechnologies