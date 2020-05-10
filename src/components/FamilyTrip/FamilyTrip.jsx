import React from "react";
import FamilyTripHeader from './FamilyTripHeader'
import FamilyTripCards from './FamilyTripCards'
import '../../assets/css/tripsCards.css'


function FamilyTrip() {
  return (
    <>
    <div className="fTripsSection">
    <FamilyTripHeader/>
    <FamilyTripCards/>
    </div>
    </>
  );
}

export default FamilyTrip;
