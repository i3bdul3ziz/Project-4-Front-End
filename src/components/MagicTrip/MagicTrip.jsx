import React from "react";
import MagicTripHeader from './MagicTripHeader'
import MagicTripFilter from './MagicTripFilter'
import '../../assets/css/tripsCards.css'


function MagicTrip() {
  return (
    <>
    <div className="fTripsSection">
    <MagicTripHeader/>
    <MagicTripFilter/>
    </div>
    </>
  );
}

export default MagicTrip;
