import React, { useEffect, useState } from "react";
import 'assets/css/ShowTrips.css'
import {
    Row,
    Col,
  } from "reactstrap";
import Slider from "components/Slider/Slider";
import GoogleApiWrapper from "components/GoogleMapAPI/GoogleApiWrapper";

function SingleTripShow() {
  
  return ( 
    <div> 
        <Row>
            <Col md={6}>
            <h1 className="title show-title-style" >Google Maps</h1>   
            <div  >
            <GoogleApiWrapper />         
            </div>
            </Col>
            <Col md={6}>
                <h2 className="title show-title-style">Title</h2>
                <Slider />
                <Row>
                    <h2 className="title show-title-style2" >Description</h2>
                </Row>
                <Row>
                    <p>Trip Style</p>
                </Row>
                <Row>
                    <p>Start date</p>
                </Row>
                <Row>
                    <p>Duration</p>
                </Row>
                
                <Row>
                <p>Trip Details Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae veritatis quaerat asperiores maiores officia ullam, dicta molestiae accusantium minima quia harum exercitationem, saepe ratione perspiciatis, rem adipisci fugiat nam</p>
                    </Row>
            </Col>
        </Row>
    </div>
  );
}
export default SingleTripShow;
