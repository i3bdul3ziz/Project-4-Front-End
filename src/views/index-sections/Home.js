import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AboutWebsite from "components/AboutWebsite/AboutWebsite";
import TripTypes from "components/TripTypes/TripTypes";
import Team from "components/Team/Team"

function Home() {
  
  return ( 
    <div> 
      <IndexHeader />
      <AboutWebsite /> 
      <TripTypes />
      <Team />
    </div>
  );
}
export default Home;
