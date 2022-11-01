import React from 'react'

import ServicesCard from './ServicesCard';
const EmergingTechnologies = ({about}) => {
    const ET_DATA = [
        {
          id: "/emerging_technologies/et1",
          title: "Big Data",
          image: "/image/servicesicons/big-data.svg",
          hImage:"/image/servicesicons/big-data-1.svg",
          bg:"/image/services/istockphoto-1279887071-170667a.jpg",
          discription:
            "Make correct decision by automated reporting that are data driven to provide valuable insights.",
        },
        {
          id: "/emerging_technologies/et2",
          title: "Internet of Things (IoT)",
          image: "/image/servicesicons/iot-1.svg",
          hImage:"/image/servicesicons/iot.svg",
          bg:"/image/services/1.jpg",
          discription:
            "Get valuable insights by deploying IoT related solutions that connects technology, processes and people.",
        },
        {
          id: "/emerging_technologies/et3",
          title: "Machine Learning",
          image: "/image/servicesicons/neural-1.svg",
          hImage:"/image/servicesicons/neural.svg",
          bg:"/image/services/istockphoto-966248982-612x612.jpg",
          discription:
            "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms.",
        },
        {
          id: "/emerging_technologies/et4",
          title: "Healthcare",
          image: "/image/servicesicons/cardiogram.svg",
          hImage:"/image/servicesicons/cardiogram-1.svg",
          bg:"/image/services/istockphoto-1327568875-170667a.jpg",
          discription:
            "Ensure timely and correct procedure through a well-organized software that will help in diagnosis.",
        },
      ];
      
  return (
    <>
<ServicesCard data={ET_DATA} about={about} />
    </>
  )
}

export default EmergingTechnologies