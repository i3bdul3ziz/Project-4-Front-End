import React from "react";
import SinglePTripsHeader from './SinglePTripsHeader'
import SinglePTripsCards from './SinglePTripsCards'
import '../../assets/css/tripsCards.css'


function SinglePersonTrip() {
  return (
    <>
    <div className="fTripsSection">
    <SinglePTripsHeader/>
    <SinglePTripsCards/>
    </div>
    </>
  );
}

export default SinglePersonTrip;
