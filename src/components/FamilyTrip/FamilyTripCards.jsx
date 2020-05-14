import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap"
// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import axios from "axios";
import '../../assets/css/tripsCards.css'


function FamilyTripCards (props) {
  const [trip, setTrip] = useState([]);

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
      setTrip(data.data);
      console.log(data)
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getTrip();
  })
  console.log(trip)
  return (
    <>
      <Container className="fTripsSection">
      <Row>
{ trip.filter((el) => el.tripStyle == "Family Trip").map((trip) => 
              <Col md={4}>
                <Card style={{ width: "20rem" }}>
                  <CardImg
                    top
                    src={trip.tripImages}
                    alt="..."
                  />
                  <CardBody>
                    <CardTitle className="fontStyle cardTitleStyle">
                      {trip.tripStyle}
                    </CardTitle>
                    <CardText className="fontStyle cardTextStyle">
                      {trip.destination}
                    </CardText>
                    <p className="fontStyle"> {trip.duration}</p>
                    {/* <p className="fontStyle">{company.companyName}</p> */}
                    <Button className="cardButtonStyle"
                    as={Link} 
                    to={`/trips/${trip._id}`}
                    >More Details</Button>
                  </CardBody>
                </Card>
              </Col>
          )}
        </Row>
        <br/><br/><br/>
        <br/>
      </Container>

    </>
  );
}

export default FamilyTripCards;
