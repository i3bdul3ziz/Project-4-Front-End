import React, { useEffect, useState } from "react";
import Axios from "axios";
import {withRouter} from "react-router-dom"
import 'assets/css/ShowTrips.css'
import {
    Row,
    Col,
    Container
  } from "reactstrap";

import Slider from "components/Slider/Slider";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Button } from "react-bootstrap";

function SingleTripShow(props) {
  const [trip, setTrip] = useState({});
  const [latV, setLatV] = useState(parseFloat(23.8859));
  const [lngV, setLngV] = useState(parseFloat(45.0792));
  const [company, setCompany] = useState({});

  let getOneTrip = () => {
    Axios.get(`http://localhost:4000/trip/${props.match.params.id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setTrip(res.data.trip);
        setCompany(res.data.trip.user[0]);
        console.log(res.data.trip);
        if (res.data.trip.lat != null && res.data.trip.lng != null) {
          setLatV(parseFloat(res.data.trip.lat));
          setLngV(parseFloat(res.data.trip.lng));
        }
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
          })
          .catch((err) => console.log(err.response));
      };


  const mapStyles = {
    "z-index": "1000",
    width: "50%",
    height: "50%",
    "margin-top": "1600px",
    "margin-left": "350px",
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
            <Button className="A" onClick={bookTrip}>
              {" "}
              Book Now!{" "}
            </Button>
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

    {/* <div class="contact">

        <h2>
        Contact
        <br />
        Information
        </h2>
        <hr />
        <h3>
        1234 Main Street,
        <br />
        New York, NY 10022
        </h3>
        <p>
        <span class="prefix">Office:</span>
        1 800 987 4567
        <br />
        <span class="prefix">Cell:</span>
        1 800 123 6578
        <br />
        <span class="prefix">FAX:</span>
        1 800 321 4567
        <br />
        E-mail:
        <a class="email" href="mailto:#">mail@email.com</a>
        </p>
      </div> */}
        <div>
          <Map
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: latV, lng: lngV }}
          >
            <Marker position={{ lat: latV, lng: lngV }} />
          </Map>
        </div>
      </div>
    </div>
    </div>
  );
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8",
  })(withRouter(SingleTripShow));

