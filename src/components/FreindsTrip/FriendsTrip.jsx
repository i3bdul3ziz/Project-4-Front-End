import React from "react";
import FriendsTripHeader from './FriendsTripHeader'
import FriendsTripCards from './FriendsTripCards'
import '../../assets/css/tripsCards.css'


function FriendsTrip() {
  return (
    <>
    <div className="fTripsSection">
    <FriendsTripHeader/>
    <FriendsTripCards/>
    </div>
    </>
  );
}

export default FriendsTrip;
