import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { Link } from "react-router-dom";

function CompanyProfile(props) {
  let [company, setCompany] = useState({});

  let getCompany = async (e) => {
    try {
      let data = await axios.get(
        `http://localhost:4000/company/${props.match.params.id}`
      );
      setCompany(data.data.company);
    } catch (err) {
      console.log(err.response);
    }
  };

  let changeHandler = (e) => {
    let temp = {...company}; //copy state object
    temp[e.target.name] = e.target.value;
    setCompany(temp);
    console.log(temp);
    console.log(company);

  };

  // let changeHandler = ({ target: { name, value } }) => {
  //   setCompany({ ...company, [name]: value });
  //   console.log(company);
  // };

  let updateHandler = async () => {
    // console.log(company);
    try {
      let data = await axios.put(
        `http://localhost:4000/company/${props.match.params.id}`,
        company
      );
      // console.log(data.data.company)
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getCompany();
  },[setCompany]);

  return (
    <div className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Company Profile</h2>
            <Form className="contact-form">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Company Name</Label>
                    <Input
                      type="text"
                      id=""
                      name="companyName"
                      value={company.companyName}
                      onChange={changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Licenses Number</Label>
                    <Input
                      disabled
                      type="text"
                      id=""
                      name="licensesNumber"
                      value={company.licensesNumber}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Email</Label>
                    <Input
                      type="text"
                      id=""
                      value={company.companyEmail}
                      name="companyEmail"
                      onChange={changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Phone Number</Label>
                    <Input
                      disabled
                      type="text"
                      id=""
                      name="companyPhoneNumber"
                      value={company.companyPhoneNumber}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Col className="text-center">
                <Button
                  className="btn-fill"
                  color="danger"
                  size="lg"
                  onClick={updateHandler}
                >
                  Save Changes
                </Button>
                {/* <Button

                  className="btn-fill"
                  color="danger"
                  size="lg"
                  // as={Link}
                  // to={`/companyprofile/${props.company._id}/createtrip`}
                >
                  Create Trips
                </Button> */}
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


{company.trips ? 
          company.trips.map((trip) => 

              <Col md={4}>
                <Card style={{ width: "20rem" }}>
                  <CardImg
                    top
                    src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
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
                    <p className="fontStyle">{company.companyName}</p>
                    <Button className="details-btn-c">More Details</Button>
                    <Button
                      className="edit-btn-c"
                      as={Link}
                      to={`edittrip/${company.trips._id}`}
                    >
                      Edit
                    </Button>
                    <Button className="delete-btn-c">Delete</Button>
                  </CardBody>
                </Card>
              </Col>
          ) : <Col></Col>}
        </Row>
      </Container>
    </div>
  );
}

export default CompanyProfile;
