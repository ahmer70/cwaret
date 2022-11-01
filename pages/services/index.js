import React,{useState} from "react";
import Menu from "../../components/Menu";
import ServicesNav from "../../components/Services/ServicesNav";
import SoftwareDevelopment from "../../components/Services/SoftwareDevelopment";
import EnterpriseSolutions from "../../components/Services/EnterpriseSolutions";
import EmergingTechnologies from "../../components/Services/EmergingTechnologies";
import Consultancy from "../../components/Services/Consultancy";
import MainFooter from '../../components/Home/MainFooter'
import Slider from "../../components/Home/Slider";

const Services = () => {
  const [OpenS, setOpenS] = useState("SD");
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
      <div className="my-5">
        <ServicesNav OpenS={OpenS} setOpenS={setOpenS} serv={true} />

        <div className=" mx-auto">
          {OpenS === "SD" && <SoftwareDevelopment />}
          {OpenS === "ES" && <EnterpriseSolutions />}
          {OpenS === "ET" && <EmergingTechnologies />}
          {OpenS === "C" && <Consultancy />}
        </div>
        <Slider/>
      </div>
      <MainFooter/>
    </>
  );
};

export default Services;
