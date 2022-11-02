import React from "react";
import LeftPanel from "../components/ContactUs/LeftPanel";
import RightPanel from "../components/ContactUs/RightPanel";
import Menu from '../components/Menu'

function ContactPage() {
    return(
        <>
        <div className="row p-0 m-0">
            <div className="col-md-4 p-0">
            <LeftPanel/>
            </div>
            <div className="col-md-8 p-0">
                <Menu contact={true} />
            <RightPanel/>
            </div>

        </div>
   
  
        </>
    );
}
export default ContactPage;