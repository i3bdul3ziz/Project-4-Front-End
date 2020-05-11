import React from "react";
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
  Form,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import "assets/css/main.css";

function CompanyProfile() {
  return (
    <div className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">User Profile</h2>
            <Form className="contact-form">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Company Name</Label>
                    <Input type="text" id="" placeholder="" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Licenses Number</Label>
                    <Input type="text" id="" placeholder=""/>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Email</Label>
                    <Input type="text" id="" placeholder="" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Phone Number</Label>
                    <Input type="text" id="" placeholder="" />
                  </FormGroup>
                </Col>
              </Row>
              <Col className="text-center">
                <Button className="btn-fill" color="danger" size="lg">
                  Save Changes
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
        <Row>
          <h2 style={{ margin: "70px auto 70px auto" }} className="title">
            Booked Trips
          </h2>
        </Row>
        <Row>
          <Col md={4}>
            <Card style={{ width: "20rem" }}>
              <CardImg
                top
                src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="..."
              />
              <CardBody>
                <CardTitle className="fontStyle cardTitleStyle">Taif</CardTitle>
                <CardText className="fontStyle cardTextStyle">
                  Alhada Mountain
                </CardText>
                <p className="fontStyle">3 Days</p>
                <p className="fontStyle">Company Name</p>
                <Button className="details-btn-c">More Details</Button>
                <Button className="edit-btn-c">Edit</Button>
                <Button className="delete-btn-c">Delete</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CompanyProfile;
