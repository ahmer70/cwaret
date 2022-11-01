import React from 'react'


import ServicesCard from './ServicesCard';

const EnterpriseSolutions = () => {
    const ES_DATA = [
        {
          id: "/enterprise_solutions/es1",
          title: "Oracle Cloud Infrastructure",
          image: "/image/network.svg",

          hImage: "/image/network-white.svg",
          bg:"/image/services/ocibg.jpg",
          discription:
            "Thinking of shifting to cloud? Let our team of certified developers help you move to Oracle Cloud infrastructure.",
        },
        {
          id: "/enterprise_solutions/es2",
          title: "Siebel CRM",
          image: "/image/CRM.svg",
          hImage: "/image/crm-white.svg",
          bg:"/image/services/crmbg.jpg",
          discription:
            "Engage with our certified experts in business design, development, testing and EAI/EIM development.",
        },
        {
          id: "/enterprise_solutions/es3",
          title: "MySQL",
          image: "/image/mysql.svg",
          hImage:"/image/servieshovericon/es/mysql.svg",
          bg:"/image/services/ConfigMigrateDataMySQL.jpg",
          discription:
            "Let our team design, architect, develop and performance tune your MySQL to increase performance and secure your vital data.",
        },
        {
          id: "/enterprise_solutions/es4",
          title: "Oracle Data Integrator",
          image: "/image/computer.svg",
          hImage:"/image/servieshovericon/es/odn.svg",
          bg:"/image/services/oracle-data-modernization-services-1.jpg",
          discription:
            "Maintain data integration and secure migration processes by leveraging ODI in our expert guidance.",
        },
      
        {
          id: "/enterprise_solutions/es5",
          title: "Business Process Outsourcing",
          image: "/image/engineering.svg",
          hImage: "/image/engineering-white.svg",
          bg:"/image/services/pbobg.jpg",
          discription:
            "Focus on your core business activities and let your secondary business activities be taken care by our strong processes.",
        },
        {
          id: "/enterprise_solutions/es6",
          title: "Support 24/7",
          image: "/image/call-center.svg",
          hImage:"/image/servieshovericon/es/sp.png",
          bg:"/image/services/Screenshot_1.png",
          discription:
            "Hire our dedicated team to support your Enterprise related IT issues.",
        },
      ];
  return (
    <>
        <ServicesCard data={ES_DATA} />
    </>
  )
}

export default EnterpriseSolutions