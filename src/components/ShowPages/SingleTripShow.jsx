import React, { useEffect, useState } from "react";
import Axios from "axios";
import {withRouter} from "react-router-dom"
import 'assets/css/ShowTrips.css'


import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Button } from "react-bootstrap";
import { NotificationManager } from 'react-notifications';

function SingleTripShow(props) {
  const [trip, setTrip] = useState({});


  let getOneTrip = () => {
    Axios.get(`http://localhost:4000/trip/${props.match.params.id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => console.log(err));
  };


      let bookTrip = () => {
        Axios.put(`http://localhost:4000/trip/${props.match.params.id}/book`, {}, {
          headers: {
            token: localStorage.getItem("token"),
          },

        })
          .then((res) => {
            console.log(res)
            props.history.push(`/userprofile/${props.user._id}`)
            NotificationManager.success('You have booked a trip!', 'Successful!', 3000);
          })
          .catch((err) => console.log(err.response));
      };


  useEffect(() => {
    getOneTrip();
  }, [Marker]);

  return (
    <div>
      <input id="menu__toogler" type="checkbox" />
      <div class="main__wrapper">
        <header
          style={{
            backgroundImage: "url(" + trip.tripImages + ")",
          }}
        >
          <div class="header__title">
            <h1>{trip.destination}</h1>
            <br />
            {props.user ?
            <Button className="A" onClick={bookTrip}>
              {" "}
              Book Now!{" "}
            </Button>
            :
            <></>
          }
          </div>
        </header>
        <div class="main-container">
          <h1>Trip Details</h1>

          <table className="tripdetails">
            <tr>
              <td>
                <p>Trip Style:</p>{" "}
              </td>
              <td>
                <p>{trip.tripStyle} </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Number Of People:</p>{" "}
              </td>
              <td>
                {" "}
                <p>{trip.numberOfPeople} </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Start Date:</p>{" "}
              </td>
              <td>
                <p>{trip.startDate} </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Duration:</p>{" "}
              </td>
              <td>
                <p>{trip.duration} </p>
              </td>
            </tr>
          </table>
          <p> {trip.description}</p>

        </div>
      </div>
      </div>
  );
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8",
  })(withRouter(SingleTripShow));

