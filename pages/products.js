import React from "react";
import Menu from "../components/Menu";

import MainFooter from '../components/Home/MainFooter'
import ProBody from "../components/Products/ProBody";
function ProductPage() {
    return(
        <>
   <Menu bggray={true} />
      <div className="container-md mb-5">
        <div className="row m-0 p-0  mt-4">
          <div className="col-md-5 p-0 m-0">
            <h1 className="gradientHeading">Products</h1>
            <h3>Manage your business with the help of exclusive apps.</h3>
            <h5 className="text-secondary">
              End to end consultancy and software development.
            </h5>
          </div>
        </div>
      </div>
<ProBody/>
      <MainFooter/>
        </>
    );
}
export default ProductPage;