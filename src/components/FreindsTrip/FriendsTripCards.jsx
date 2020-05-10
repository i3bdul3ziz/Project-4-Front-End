import React from "react";

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
  Button,
} from "reactstrap";
import '../../assets/css/tripsCards.css'


function FriendsTripCards() {
  return (
    <>
      <Container className="fTripsSection">
        <Row>
        <h2 style={{margin: "70px auto"}} className="title">Try Our Trips Now!</h2>
        </Row>
        <Row>
          <Col md={4}>
            <Card style={{ width: "20rem" }}>
              <CardImg top src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="..." />
              <CardBody>
                <CardTitle className="fontStyle cardTitleStyle">Taif</CardTitle>
                <CardText className="fontStyle cardTextStyle">
                  Alhada Mountain
                </CardText>
                <p className="fontStyle">3 Days</p>
                <p className="fontStyle">
                Company Name
                </p>
                <Button className="friendsCardButtonStyle">More Details</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/><br/><br/>
        <br/>
      </Container>

    </>
  );
}

export default FriendsTripCards;
