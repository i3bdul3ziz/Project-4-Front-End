import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "../../assets/css/tripsCards.css";
import axios from "axios";

function MagicTripFilter (props) {



const [allTrips, setAllTrips] = useState([]);
const [selectedTrips, setSelectedTrips] = useState([]);
const [filter, setFilter] = useState({tripStyle: "All", numberOfPeople: "All", duration: "All"});


let getTrip = async (e) => {
    try {
      let data = await axios.get(
        `http://localhost:4000/trip/AllTrips`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
        
        
      );
      setAllTrips(data.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    getTrip();
  })

  useEffect(() => {
    let selected = solve(filter, allTrips);
  setSelectedTrips(selected);
  console.log(selected)
  }, [filter, allTrips])

  function solve(object , array) {
    let fee = array
    for (const key in object) {
        if (object[key] != "all") fee = fee.filter(el => el[key] == object[key])
        }
          return fee
}

function filterTrips ({ target: { name, value } }) {
  //  test the output
  // filter = { ...filter, [name]: value };
  setFilter( {...filter, [name]: value})

  
  // console.log(value);
  // // console.log(allTrips)
  // let selected = solve(filter, allTrips);
  // setSelectedTrips(selected);
  // console.log(selected)
};
  return (
    <>
      <Container className="fTripsSection">
        <Row>
          <h2 style={{ margin: "70px auto" }} className="title">
            Try Our Trips Now!
          </h2>
        </Row>
        <Row className="selector-color">
          <Col md={4}>
            <FormGroup>
              <Label for="exampleSelect1">Trip Style</Label>
              <Input type="select" name="tripStyle" id="exampleSelect1" onChange={(e) => filterTrips(e)}>
                    <option>Choose trip style...</option>
                    <option>Family Trip</option>
                    <option>Friends Trip</option>
                    <option>Solo Trip</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleSelect1">Number of People</Label>
              <Input type="select" name="numberOfPeople" id="exampleSelect1">
              <option>choose the number of people....</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleSelect1">Duration</Label>
              <Input type="select" name="duration" id="exampleSelect1">
              <option>Choose the number of days...</option>
                  <option>1 Day</option>
                  <option>2 Days</option>
                  <option>3 Days</option>
                  <option>4 Days</option>
                  <option>5 Days</option>
                  <option>1 Week</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row className="justify-content-center">
            <Button className="text-center">Apply Magic</Button>
        </Row>
        <Row className="justify-content-center">
          {/* The Magic Trip */}
        </Row>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  );
}

export default MagicTripFilter;
