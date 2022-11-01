import React from 'react'
import Menu from "../../components/Menu";
import MainFooter from '../../components/Home/MainFooter'
import ServiceDetails from '../../components/Services/ServiceDetails';
const dedicated_teams = () => {
    const dt_data = [
        {
          id: "dt1",
          title: "Dedicated Teams",
          logo: "/image/business_hierarchy_leadership_management_organization_icon.svg",
          image: "/image/3226801.jpg",
          para1:
            "Leverage our recruitment capabilities and grow your team with our technical resources.",
        },
      ];

      const dedicatedSub = [
        {
          id: "dds1",
          logo: "/image/C_-_56_x2C__skills_x2C__Graphs_x2C__people_x2C__profile_x2C__settings_x2C__statistics_x2C__team.svg",
          title: "Leverage Skillset",
          para1:
            "Leverage our recuritment capabilities and grow your team with our technical resources.",
        },
        {
          id: "dds2",
          logo: "/image/Layer_15.svg",
          title: "Save Time-To-Market",
          para1:
            "Help fast track your development to get your product to market faster.",
        },
        {
          id: "dds3",
          logo: "/image/6602471_design_focus_graphic_icon.svg",
          title: "Focus on things that really matter ",
          para1:
            "Help you focus on your core business while we focus on your product development and maintenance with customer centric approach.",
        },
      ];
      
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
     <ServiceDetails data={dt_data[0]} cons={dedicatedSub}/>
    </div>
      <MainFooter/>
    </>
  )
}

export default dedicated_teams