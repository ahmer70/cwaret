import React,{useState} from "react";
import TopPanel from "../components/About/TopPanel";
import WhatWeDo from "../components/About/WhatWeDo";
import Menu from "../components/Menu";
import Clients from "../components/Home/Clients";
import VisionQuote from "../components/About/VisionQuote";
import MainFooter from "../components/Home/MainFooter";
import ValuesComponent from "../components/About/ValuesComponent";
import ServicesNav from "../components/Services/ServicesNav";
import SoftwareDevelopment from "../components/Services/SoftwareDevelopment";
import EnterpriseSolutions from "../components/Services/EnterpriseSolutions";
import EmergingTechnologies from "../components/Services/EmergingTechnologies";
import Consultancy from "../components/Services/Consultancy";

function AboutPage() {
  const [OpenS,setOpenS] = useState('SD')
  return (
    <div>
      <Menu bggray={true} />
      <div className="container-md mt-4">
        <TopPanel />
      </div>
      <div className="" style={{backgroundColor: "hsl(0deg 0% 0% / 10%)",}}>
        <WhatWeDo />
        <div className="container-md mx-auto mt-3 setIndex1">
          <Clients about={true} />
        </div>
        <VisionQuote />
        <div className="container-md mx-auto my-3">
          <ValuesComponent />{" "}
        </div>
        <div className="gradientbg rounded py-3">
      <p className="borderHeading mb-4 ">Service</p>
        <ServicesNav OpenS={OpenS} setOpenS={setOpenS}/>
        </div>
      <div className="container-md mx-auto" >
      {OpenS==='SD'&&<SoftwareDevelopment about={true}/>}
        {OpenS==='ES'&&<EnterpriseSolutions about={true}/>}
         {OpenS==='ET'&&<EmergingTechnologies  about={true}/>}
         {OpenS==='C'&&<Consultancy about={true}/>}
      </div>
      </div>
      <MainFooter />
    </div>
  );
}
export default AboutPage;
