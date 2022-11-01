import React from 'react'
import Menu from "../../../components/Menu";
import MainFooter from '../../../components/Home/MainFooter'
import ServiceDetails from '../../../components/Services/ServiceDetails';


const ES_DATA = [
  {
    id: "es1",
    title: "Oracle Cloud Infrastructure (OCI)",
    logo: "/image/network.svg",
    image: "/image/33801.svg",
    para1:
      "Oracle Cloud Infrastructure (OCI) is a deep and broad platform of public cloud services that enables customers to build and run a wide range of applications in a scalable, secure, highly available, and high-performance environment.",
    para2:
      "OCI is the exclusive home of Oracle Autonomous Database and its self-repairing, self-optimizing autonomous features. Leveraging machine learning to automate routine tasks, Autonomous Database delivers higher performance, better security, and improved operational efficiency, and frees up more time to focus on building enterprise applications.",
    para3:
      "Oracle Cloud Infrastructure is built for enterprises seeking higher performance, lower costs, and easier cloud migration for their existing on-premises applications, and better price-performance for cloud native workloads.",
  },
  {
    id: "es2",
    title: "Siebel CRM",
    logo: "/image/CRM.svg",
    image: "/image/CRM Vector-min.png",
    para1:
      "Utilize a complete, enterprise grade CRM solution, capable of extreme scale and performance for even the most complex organizations. Oracle Siebel CRM has unrivalled customization and integration capabilities, an open architecture for a truly personalized user experience, and can be deployed either on-premises or in the cloud. It’s a key component of Oracle’s customer experience and industry solution strategy.",
    para2:
      "Siebel CRM deliver real value with broad, rich, industry-specific functionality across 21 industries. Leverage your existing Siebel CRM investment with Oracle CX applications for best-of-breed industry solutions.",
    para3:
      "It automates and streamlines the relationship between your brand and all your channel and alliance partners, distributors, resellers, agents, brokers, or dealers. Track leads, share information, assess partner progress, improve forecasting accuracy, manage complex pricing schemes, and oversee channel operations. Build a partner ecosystem to drive sales and reduce management costs.",
  },
  {
    id: "es3",
    title: "MySQL",
    logo: "/image/mysql.svg",
    image: "/image/image_2021_11_17T07_01_36_978Z.png",
    para1:
      "MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation.",
    para2:
      "Many of the world's largest and fastest-growing organizations including Facebook, Twitter, Booking.com, and Verizon rely on MySQL to save time and money powering their high-volume Web sites, business-critical systems and packaged software.",
    para3:
      "This database is a structured collection of data. It may be anything from a simple shopping list to a picture gallery or the vast amounts of information in a corporate network. To add, access, and process data stored in a computer database, you need a database management system such as MySQL Server. Since computers are very good at handling large amounts of data, database management systems play a central role in computing, as standalone utilities, or as parts of other applications.",
  },
  {
    id: "es4",
    title: "Oracle Data Integrator (ODI)",
    logo: "/image/computer.svg",
    image: "/image/66205-min.png",
    para1:
      "Oracle Data Integrator is a comprehensive data integration platform that covers all data integration requirements: from high-volume, high-performance batch loads, to event-driven, trickle-feed integration processes, to SOA-enabled data services. Oracle Data Integrator (ODI) 12c, the latest version of Oracle’s strategic Data Integration offering, provides superior developer productivity and improved user experience with a redesigned flow-based declarative user interface and deeper integration with Oracle GoldenGate. ODI12c further builds on its flexible and high-performance architecture with comprehensive big data support and added parallelism when executing data integration processes. It includes interoperability with Oracle Warehouse Builder (OWB) for a quick and simple migration for OWB customers to ODI12c. Additionally, ODI can be monitored from a single solution along with other Oracle technologies and applications through the integration with Oracle Enterprise Manager 12c.",
  },
  {
    id: "es5",
    title: "Business Process Outsourcing (BPO)",
    logo: "/image/engineering.svg",
    image: "/image/ITES-BPO Vector.svg",
    para1:
      "We enable our clients to outperform with technology-based Information Technology Enabled Services (ITES) business process outsourcing. ",
  },
];
const Slug = ({data}) => {
   
  return (
    <>
     <Menu bggray={true} />
    <div className="container-md mb-5">
      <div className="row m-0 p-0  mt-4">
        <div className="col-md-5 p-0 m-0">
          <h1 className="gradientHeading">Services</h1>
          <h3>Grow your business with innovative software solutions.</h3>
          <h5 className="text-secondary">
            End to end consultancy and software development.
          </h5>
        </div>
      </div>
    </div>
    <div className="container-md my-5">
     <ServiceDetails data={data&&data.length>0&&data[0]} />
    </div>
    <MainFooter/></>
  )
}
export  function getServerSideProps({params}) {
  const { slug }=params

  
  let data=ES_DATA.filter(e=>e.id===slug)
  return {
    props: {data}, 
  }
}
export default Slug