import React, { useEffect, useState } from "react";
import Axios from "axios";
import 'assets/css/ShowTrips.css'
import {
    Row,
    Col,
  } from "reactstrap";
import Slider from "components/Slider/Slider";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function SingleTripShow(props) {
    const [trip, setTrip] = useState({});
    const [latV, setLatV] = useState(parseFloat(23.8859));
    const [lngV, setLngV] = useState(parseFloat(45.0792));
    const [company, setCompany] = useState([])

    let getOnTrip = () => {
        Axios.get(`http://localhost:4000/trip/${props.match.params.id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
          .then((res) => {
            setTrip(res.data.trip);
            setCompany(res.data.trip.user[0])
            if (res.data.trip.lat != null && res.data.trip.lng != null) {
              // console.log("!=")
              setLatV(parseFloat(res.data.trip.lat));
              setLngV(parseFloat(res.data.trip.lng));
            }
          })
          .catch((err) => console.log(err));
      };

      const mapStyles = {
        margin: "0",
        width: "70%",
        height: "70%",
      };


      useEffect(() => {
        getOnTrip();
      },[Marker]);

  return ( 
    <div> 
        <Row>
            <Col md={6}>
            <h1 className="title show-title-style" >Google Maps</h1>   
            <div  >
            <Map
              google={props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: latV, lng: lngV }}
            >
                <Marker position={{ lat: latV, lng: lngV}} />
            </Map>       
            </div>
            </Col>
            <Col md={6}>
                <h2 className="title show-title-style">{trip.destination}</h2>
                <Slider tripImage={trip.tripImages}/>
                <Row>
                    <h2 className="title show-title-style2" >{trip.description}</h2>
                </Row>
                <Row>
                    <p>{trip.tripStyle}</p>
                </Row>
                <Row>
                    <p>{trip.startDate}</p>
                </Row>
                <Row>
                    <p>{trip.duration}</p>
                </Row>
                <Row>
                    <p>{trip.numberOfPeople}</p>
                </Row>
                <Row>
                    <p>{company.companyName}</p>
                </Row>
            </Col>
        </Row>
    </div>
  );
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8",
  })(SingleTripShow);