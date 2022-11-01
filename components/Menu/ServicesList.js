import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import style from "./Menu.module.css";

const ServicesList = () => {
    const [Items, setItems] = useState(null)
    const [ES, setES] = useState(null)
    const [ET, setET] = useState(null)
    const [CS, setCS] = useState(null)
    const SD_DATA = [
        {
          id: "/software_development/sd1",
          title: "Custom Software Solutions",
          image: "/image/layers.svg",
          hImage:"/image/layers-white.svg"
         },
        {
          id: "/software_development/sd2",
          title: "UI/UX Design",
          image: "/image/ux-design.svg",
          hImage:"/image/servieshovericon/sd/uiux.svg",
         },
        {
          id: "/software_development/sd3",
          title: "Product Visualization and Strategy",
          image: "/image/product.svg",
          hImage:"/image/servieshovericon/sd/pvds.svg",

         },
        {
          id: "/software_development/sd4",
          title: "QA & Testing",
          image: "/image/Group 6068.svg",
          hImage:"/image/servieshovericon/sd/qa.svg",

      },
        {
          id: "/software_development/sd5",
          title: "Embedded Development",
          image: "/image/rise.svg",
          hImage:"/image/servieshovericon/sd/embd.svg",

       
        },
      
        {
          id: "/software_development/sd6",
    
          title: "Dev Ops Practice",
          image: "/image/web-development.svg",
          hImage:"/image/servieshovericon/sd/devops.png"

         },
      ];
      const ES_DATA = [
        {
          id: "/enterprise_solutions/es1",
          title: "Oracle Cloud Infrastructure",
          image: "/image/network.svg",
          hImage: "/image/network-white.svg",

         },
        {
          id: "/enterprise_solutions/es2",
          title: "Siebel CRM",
          image: "/image/CRM.svg",
          hImage: "/image/crm-white.svg",
          },
        {
          id: "/enterprise_solutions/es3",
          title: "MySQL",
          image: "/image/mysql.svg",
          hImage:"/image/servieshovericon/es/mysql.svg"
       },
        {
          id: "/enterprise_solutions/es4",
          title: "Oracle Data Integrator",
          image: "/image/computer.svg",
          hImage:"/image/servieshovericon/es/odn.svg"

       },
      
        {
          id: "/enterprise_solutions/es5",
          title: "Business Process Outsourcing",
          image: "/image/engineering.svg",
          hImage: "/image/engineering-white.svg",
     },
        {
          id: "/enterprise_solutions/es6",
          title: "Support 24/7",
          image: "/image/call-center.svg",
          hImage:"/image/servieshovericon/es/sp.png"

         
        },
      ];
      
      const ET_DATA = [
        {
          id: "/emerging_technologies/et1",
          title: "Big Data",
          image: "/image/big-data.svg",
          hImage:"/image/servieshovericon/et/bd.svg"

        },
        {
          id: "/emerging_technologies/et2",
          title: "Internet of Things (IoT)",
          image: "/image/noun_internet of things_1228694.svg",
          hImage:"/image/servieshovericon/et/iot.svg"

         },
        {
          id: "/emerging_technologies/et3",
          title: "Machine Learning",
          image: "/image/neural.svg",
          hImage:"/image/servieshovericon/et/rmc.svg"

         },
        {
          id: "/emerging_technologies/et4",
          title: "Healthcare",
          image: "/image/cardiogram.svg",
          hImage:"/image/servieshovericon/et/hc.svg"

         },
      ];


      const CON_DATA = [
        {
          id: "/consultancy/con1",
          title: "Product Visualization & Strategy",
          image: "/image/supply-chain.svg",
          hImage:"/image/servieshovericon/co/pvs.svg"

         },
        {
          id: "/consultancy/con2",
          title: "Digital Transformation",
          image: "/image/network-connection.svg",
          hImage: "/image/network-connection-white.svg",
        },
        {
          id: "/consultancy/con3",
          title: "Digital Discovery Workshop ",
          image: "/image/business_factory_location_manufactory_plant_icon.svg",
          hImage:
          "/image/1530084_business_factory_location_manufactory_plant_icon-white.svg",
     
         },
      ];
      

  return (
    <div className={`${style.ServicesList} p-4 `} style={{overflow :"auto"}}>
        <div>
            <h5 style={{color:"#000460"}} className="text-start">Software Development</h5>
            <div className='row m-0'>
            {SD_DATA.map((e,index)=><div className='col-md-2 ' key={index}>
            <div href={e.id}  className={`rounded p-2 ${style.servicelink}`} onMouseEnter={()=>setItems({[index]:true})} onMouseLeave={()=>setItems(null)}>
            <Link href={`/services${e.id}`}  className={`text-decoration-none `}>
                <Image src={Items&&Items[index]?e.hImage:e.image} width={35} height={35} alt={e.title} className="mb-2"/>
                <p style={{fontSize:"12px"}} className={Items&&Items[index]?"text-white":"text-secondary"}>{e.title}</p>
            </Link>
</div>
         
            </div>)}
            </div>
           

        </div>
        <div>
            <h5 style={{color:"#000460"}} className="text-start">Enterprise Solutions</h5>
           
            <div className='row m-0'>
            {ES_DATA.map((e,index)=><div className='col-md-2' key={index}>
            <div className={`rounded p-2 ${style.servicelink}`} onMouseEnter={()=>setES({[index]:true})} onMouseLeave={()=>setES(null)}>
            <Link href={`/services${e.id}`}  className={`text-decoration-none `}>
                <Image src={ES&&ES[index]?e.hImage:e.image} width={35} height={35} alt={e.title} className="mb-2"/>
                <p style={{fontSize:"12px"}} className={ES&&ES[index]?"text-white":"text-secondary"}>{e.title}</p>
            </Link>
</div>
            
            </div>)}
            </div>
        </div>
        <div>
            <h5 style={{color:"#000460"}} className="text-start">Emerging Technologies</h5>
          
            <div className='row m-0'>
            {ET_DATA.map((e,index)=><div className='col-md-2' key={index} onMouseEnter={()=>setET({[index]:true})} onMouseLeave={()=>setET(null)}>
            <div className={`rounded p-2 ${style.servicelink}`}>
            <Link href={`/services${e.id}`}   className={`text-decoration-none `}>
                <Image src={ET&&ET[index]?e.hImage:e.image} width={35} height={35} alt={e.title} className="mb-2"/>
                <p style={{fontSize:"12px"}} className={ET&&ET[index]?"text-white":"text-secondary"}>{e.title}</p>
            </Link>
</div>
           
            </div>)}
            </div>
        </div>
        <div>
            <h5 style={{color:"#000460"}} className="text-start">Consultancy</h5>
           
            <div className='row m-0'>
            {CON_DATA.map((e,index)=><div className='col-md-2 ' key={index} onMouseEnter={()=>setCS({[index]:true})} onMouseLeave={()=>setCS(null)}>
                <div className={`rounded p-2 ${style.servicelink}`}>
                <Link href={`/services${e.id}`}   className={`text-decoration-none `}>
                <Image src={CS&&CS[index]?e.hImage:e.image} width={35} height={35} alt={e.title} className="mb-2"/>
                <p style={{fontSize:"12px"}} className={CS&&CS[index]?"text-white":"text-secondary"}>{e.title}</p>
            </Link>
                </div>
         
            </div>)}
            </div>
        </div>

    </div>
  )
}

export default ServicesList