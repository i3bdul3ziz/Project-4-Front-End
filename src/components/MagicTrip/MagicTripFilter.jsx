import React from "react";

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

function MagicTripFilter() {
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
              <Label for="exampleSelect1">Example select</Label>
              <Input type="select" name="select" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleSelect1">Example select</Label>
              <Input type="select" name="select" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleSelect1">Example select</Label>
              <Input type="select" name="select" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
