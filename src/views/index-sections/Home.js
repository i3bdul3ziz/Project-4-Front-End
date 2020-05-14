import React from "react";
import IndexHeader from "components/Headers/IndexHeader.js";
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
