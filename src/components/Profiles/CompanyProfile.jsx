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
  Form,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import {Button} from "react-bootstrap"
import "assets/css/main.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { NotificationManager } from 'react-notifications';

function CompanyProfile(props) {
  const [company, setCompany] = useState({});
  const [message , setMessage] = useState(null);

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

  };


  let updateHandler = async () => {
    try {
      let data = await axios.put(
        `http://localhost:4000/company/${props.match.params.id}/edit`,
        company
      );
    } catch (err) {
      console.log(err.response);
    }
  };

  let deleteTrip = (id)=> {
    let token = localStorage.token
    if (token){
 axios.delete(`http://localhost:4000/trip/${id}/delete`, {
     headers: {token}
 })
 .then(message => {
   props.history.push("/home"); 
   NotificationManager.success('You have deleted a trip!', 'Successful!', 3000);
   console.log("deleted")})
 .catch(err => {
     setMessage(err.response.data.message)
     setTimeout(() => {
        setMessage(null)
     },2000);
    console.log(err.response)}
 )
    }
    console.log(localStorage.token)
 }

  useEffect(() => {
    getCompany();
  },[setCompany]);

  return (
    <div className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center mt-5">Company Profile</h2>
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
          
              </Col>
            </Form>
          </Col>
        </Row>
        <Row>
          <h2 style={{ margin: "70px auto 70px auto" }} className="">
            Created Trips
          </h2>
        </Row>
        <Row className="justify-content-center">
        <Button
                  className="btn-fill mb-5"
                  color="danger"
                  size="md"
                  as={Link} 
                  to={"/createtrip"}
                  
                >
                  Create Trip
                </Button>
        </Row>
        <Row>

    {company.trips ? 
          company.trips.map((trip) => 

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
                    <p className="fontStyle">{company.companyName}</p>
                    <Button className="details-btn-c"
                    size="sm"                       
                    as={Link}
                      to={`/trip/${trip._id}`}
                      replace   >
                        More Details
                        </Button>
                    <Button
                      className="edit-btn-c"
                      size="sm"
                      as={Link}
                      to={`/edittrip/${trip._id}`}
                      replace                    
                    >
                      Edit
                    </Button>

                    <Button 
                    className="delete-btn-c" 
                    color=""
                    size="sm"
                    onClick={()=> deleteTrip(trip._id)} 
                    >
                      Delete
                    </Button>

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
