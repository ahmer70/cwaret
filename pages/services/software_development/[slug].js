import React from 'react'
import Menu from "../../../components/Menu";
import MainFooter from '../../../components/Home/MainFooter'
import ServiceDetails from '../../../components/Services/ServiceDetails';


const SD_DATA = [
  {
    id: "sd1",
    title: "Custom Software Solutions",
    logo: "/image/layers.svg",
    image: "/image/Application Development Vector.svg",
    para1:
      "A software solution is a program that will perform all the time-consuming tasks and automate regular task catering you ease. Development of custom software is a process of designing software applications that meet the specific needs of an individual or a company.",
    para2:
      "Custom software development allows you to build software made as per the unique requirements of your company applicable for that particular business’s needs.",
    para3:
      "Custom software development is customized, which means that applications and programs will be completely customized for your company. It is easy to use and can be implemented throughout your organization.",
  },
  {
    id: "sd2",
    title: "UI/UX Design",
    logo: "/image/ux-design.svg",
    image: '/image/5765411-min.png',
    para1:
      "The UI design means user interface. The user interface is the graphical layout of an application. It consists of the buttons users click on, the text they read, the images, sliders, text entry fields, and all the rest of the items the user interacts with. This includes screen layout, transitions, interface animations and every single micro-interaction. Any sort of visual element, interaction, or animation must all be designed.",
    para2:
      "UX stands for user experience. A user’s experience of the app is determined by how they interact with it. Is the experience smooth and intuitive or clunky and confusing? Does navigating the app feel logical or does it feel arbitrary? Does interacting with the app give people the sense that they’re efficiently accomplishing the tasks they set out to achieve or does it feel like a struggle? User experience is determined by how easy or difficult it is to interact with the user interface elements that the UI designers have created.",
  },
  {
    id: "sd3",
    title: "Product Visualization",
    logo: "/image/product.svg",
    image: "/image/Data Solution Vector-min.png",
    para1:
      "What Is Product Visualization? Product visualization is the act of using renderings, images, and artwork to visually communicate your products to customers. Today, many companies do this by enabling their e-commerce websites with visual product configuration software",
    para2:
      "As the saying goes, pictures are worth a thousand words. This is the idea behind product visualization. Product visualization (also referred to as photo rendering) is an innovative technology used to quickly and realistically depict products or architecture visually. It helps companies to standout in a fast moving competitive world.",
  },
  {
    id: "sd4",
    title: "QA & Testing",
    logo: "/image/Group 6068.svg",
    image: "/image/3610482-min.png",
    para1:
      "Software quality assurance is a means and practice of monitoring the software engineering processes and methods used in a project to ensure proper quality of the software. It may include ensuring conformance to standards or models, such as ISO/IEC 9126, SPICE or CMMI.",
    para2:
      "QA aims to deliver consistent results through a set of standardized procedures, which means that organizations also need to make sure that their processes for achieving the desired results hit specific quality benchmarks themselves.",
    para3:
      "In brief, you might say that QA includes all activities that center around implementing standards and procedures associated with ensuring that software meets a certain set of requirements before it’s released to the public.",
  },
  {
    id: "sd5",
    title: "Embedded Development",
    logo: "/image/rise.svg",
    image: "/image/4380747.svg",
    para1:
      "Embedded software is a system that is created and built-in to any device other than a traditional computer. It is the brain of a certain device, without which it is just a piece of useless equipment. ",
    para2:
      "The simplest of the embedded software examples is a traditional calculator that was used before this feature was built into smartphones. Another simple example is a TV remote control or a digital camera. They all are powered by embedded systems. You might ask “is an embedded system about software development?” The answer is not always. Sometimes the term firmware is also used for simpler devices such as the ones we listed above.",
  },

  {
    id: "sd6",
    title: "Dev Ops Practice",
    logo: "/image/web-development.svg",
    image: "/image/20944136.svg",
    para1:
      "DevOps is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams. The term DevOps, a combination of the words development and operations, reflects the process of integrating these disciplines into one, continuous process.",
    para2:
      "DevOps is an evolving philosophy and framework that encourages faster, better application development and faster release of new or revised software features or products to customers.",
    para3: "Some benefits of DevOps include:",
    points: [
      "Faster, better product delivery",
      "Faster issue resolution and reduced complexity",
      "Greater scalability and availability",
      "More stable operating environments",
      "Better resource utilization",
      "Greater automation",
      "Greater visibility into system outcomes",
      "Greater innovation",
    ],
  },
  {
    id: "sd7",
    title: "Web App Solution",
    logo: "/image/layers.svg",
    image: "/image/10168.svg",
    para1:
      "A web application is a computer program that utilizes web browsers and web technology to perform tasks over the Internet. Millions of businesses use the Internet as a cost-effective communications channel. It lets them exchange information with their target market and make fast, secure transactions. However, effective engagement is only possible when the business is able to capture and store all the necessary data, and have a means of processing this information and presenting the results to the user.",
    para2:
      "Web applications use a combination of server-side scripts (PHP and ASP) to handle the storage and retrieval of the information, and client-side scripts (JavaScript and HTML) to present information to users. This allows users to interact with the company using online forms, content management systems, shopping carts and more. In addition, the applications allow employees to create documents, share information, collaborate on projects, and work on common documents regardless of location or device.",
  },
  {
    id: "sd8",
    title: "Mobile App Solution",
    logo: "/image/ux-design.svg",
    image: "/image/4428861-min.png",
    para1:
      "A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile device, such as a smartphone or tablet computer. Mobile applications frequently serve to provide users with similar services to those accessed on PCs. Apps are generally small, individual software units with limited function. This use of app software was originally popularized by Apple Inc. and its App Store, which offers thousands of applications for the iPhone, iPad and iPod Touch. A mobile application also may be known as an app, online app, iPhone app or smartphone app.",
    para2:
      "Mobile applications are a move away from the integrated software systems generally found on PCs. Instead, each app provides limited and isolated functionality such as a game, calculator or mobile web browsing. Although applications may have avoided multitasking because of the limited hardware resources of the early mobile devices, their specificity is now part of their desirability because they allow consumers to hand-pick what their devices are able to do.",
  },
];


const CSS_DATA = [
  {
    id: "sd1",
    link:"/services/software_development/sd7",
    title: "Web App Solution",
    image: "/image/Web app solutions.svg",

    discription:
      "A web application is a computer program that utilizes web browsers and web technology to perform tasks over the Internet. ",
  },
  {
    id: "sd1",
    link:"/services/software_development/sd8",
    title: "Mobile App Solution",
    image: "/image/Mobile app solutions.svg",

    discription:
      "A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile",
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
     <ServiceDetails data={data&&data.length>0&&data[0]} subData={subData}/>
    </div>
    <MainFooter/>
    </>
  )
}
export  function getServerSideProps({params}) {
  const { slug }=params

  
  let data=SD_DATA.filter(e=>e.id===slug)
  let subData=CSS_DATA.filter(e=>e.id===slug)
  return {
    props: {data,subData}, 
  }
}
export default Slug