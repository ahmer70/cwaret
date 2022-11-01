import React from 'react'


import ServicesCard from './ServicesCard';

const EnterpriseSolutions = ({about}) => {
    const ES_DATA = [
        {
          id: "/enterprise_solutions/es1",
          title: "Oracle Cloud Infrastructure",
          image: "/image/servicesicons/network-1.svg",
          hImage: "/image/servicesicons/network.svg",
          bg:"/image/services/ocibg.jpg",
          discription:
            "Thinking of shifting to cloud? Let our team of certified developers help you move to Oracle Cloud infrastructure.",
        },
        {
          id: "/enterprise_solutions/es2",
          title: "Siebel CRM",
          image: "/image/servicesicons/CRM.svg",
          hImage:  "/image/servicesicons/CRM-1.svg",
          bg:"/image/services/crmbg.jpg",
          discription:
            "Engage with our certified experts in business design, development, testing and EAI/EIM development.",
        },
        {
          id: "/enterprise_solutions/es3",
          title: "MySQL",
          image: "/image/servicesicons/mysql-1.svg",
          hImage:"/image/servicesicons/mysql.svg",
          bg:"/image/services/ConfigMigrateDataMySQL.jpg",
          discription:
            "Let our team design, architect, develop and performance tune your MySQL to increase performance and secure your vital data.",
        },
        {
          id: "/enterprise_solutions/es4",
          title: "Oracle Data Integrator",
          image: "/image/servicesicons/computer.svg",
          hImage:"/image/servicesicons/computer-1.svg",
          bg:"/image/services/oracle-data-modernization-services-1.jpg",
          discription:
            "Maintain data integration and secure migration processes by leveraging ODI in our expert guidance.",
        },
      
        {
          id: "/enterprise_solutions/es5",
          title: "Business Process Outsourcing",
          image: "/image/servicesicons/engineering-1.svg",
          hImage: "/image/servicesicons/engineering.svg",
          bg:"/image/services/pbobg.jpg",
          discription:
            "Focus on your core business activities and let your secondary business activities be taken care by our strong processes.",
        },
        {
          id: "/enterprise_solutions/es6",
          title: "Support 24/7",
          image: "/image/servicesicons/call-center.svg",
          hImage:"/image/servicesicons/call-center-1.svg",
          bg:"/image/services/Screenshot_1.png",
          discription:
            "Hire our dedicated team to support your Enterprise related IT issues.",
        },
      ];
  return (
    <>
        <ServicesCard data={ES_DATA} about={about} />
    </>
  )
}

export default EnterpriseSolutions