import React from "react";
import LeftPanel from "../components/ContactUs/LeftPanel";
import RightPanel from "../components/ContactUs/RightPanel";


function ContactPage() {
    return(
        <>
        <div className="row p-0 m-0">
            <div className="col-md-5 ps-0">
            <LeftPanel/>
            </div>
            <div className="col-md-7">
            <RightPanel/>
            </div>

        </div>
   
  
        </>
    );
}
export default ContactPage;