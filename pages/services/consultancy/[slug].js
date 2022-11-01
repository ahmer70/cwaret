import React from 'react'
import Menu from "../../../components/Menu";
import MainFooter from '../../../components/Home/MainFooter'
import ServiceDetails from '../../../components/Services/ServiceDetails';

const CS_DATA = [
  {
    id: "con1",
    title: "Product Visualization & Strategy",
    logo: "/image/supply-chain.svg",
    image: "/image/20945390.svg",
    para1:
      "What Is Product Visualization? Product visualization is the act of using renderings, images, and artwork to visually communicate your products to customers. Today, many companies do this by enabling their e-commerce websites with visual product configuration software.",
    para2:
      "As the saying goes, pictures are worth a thousand words. This is the idea behind product visualization. Product visualization (also referred to as photo rendering) is an innovative technology used to quickly and realistically depict products or architecture visually. It helps companies to standout in a fast moving competitive world.",
  },
  {
    id: "con2",
    title: "Digital Transformation",
    logo: "/image/network-connection.svg",
    image: "/image/18383.svg",
    para1:
      "CWare Technologies enables you to Digitally transform and integrate digital technology into all areas of a business, which will fundamentally change how you operate and deliver value to your customers.",
  },
  {
    id: "con3",
    title: "Digital Discovery Workshop",
    logo: "/image/business_factory_location_manufactory_plant_icon.svg",
    image: "/image/Students watching webinar on computer.jpg",
    para1:
      "Plan your digital transformation roadmap through 1 week collaborative discovery workshops.",
  },


];

const dtSub = [
  {
    id: "con2",
    logo: "/image/3325093_cloud_lightning_icon.svg",
    title: "Cloud Solutions",
  },
  {
    id: "con2",
    logo: "/image/Big Data Analysis.svg",
    title: "Big Data Analysis",
  },
  {
    id: "con2",
    logo: "/image/noun_internet of things_1228694.svg",
    title: "Internet of Things",
  },

  {
    id: "con3",
    logo: "/image/2561353_check_circle_icon.svg",
    title: "Idea Validation",
    para1: "Help in picturing the pros and cons of your idea.",
  },
  {
    id: "con3",
    logo: "/image/211760_infinite_icon.svg",
    title: "Requirements & Visualization",
    para1:
      "Design and define key features of your upcoming product. Prototyping to see how your software product will look and feel like.",
  },
  {
    id: "con3",
    logo: "/image/Layer_18.svg",
    title: "Setting Product Scope",
    para1:
      "Define roles and responsibilities and avoid scope creep to save valuable time and resources.",
  },
];
const Slug = ({data,subData}) => {
   
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
     <ServiceDetails data={data&&data.length>0&&data[0]} cons={subData}/>
    </div>
      <MainFooter/>
      </>
  )
}
export  function getServerSideProps({params}) {
  const { slug }=params

  
  let data=CS_DATA.filter(e=>e.id===slug)
  let subData=dtSub.filter(e=>e.id===slug)
  return {
    props: {data,subData}, 
  }
}
export default Slug