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
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormGroup,
  Label,
} from "reactstrap";
import {Button} from "react-bootstrap"
import "assets/css/main.css";
import axios from "axios";
import { Link } from "react-router-dom";


function UserProfile(props) {
  let [user, setUser] = useState({});

  let getUser = async (e) => {
    try {
      let data = await axios.get(
        `http://localhost:4000/user/${props.match.params.id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setUser(data.data.user);

    } catch (err) {
      console.log(err.response);
    }
  };
  
  let changeHandler = (e) => {
    let temp = {...user}; //copy state object
    temp[e.target.name] = e.target.value;
    setUser(temp);
    // console.log(temp);
    // console.log(company);

  };

  let updateHandler = async () => {
    console.log(user);

    try {
      let data = await axios.put(
        `http://localhost:4000/user/${props.match.params.id}/edit`,
        user
      );
      // console.log(data.data.company)
    } catch (err) {
      console.log(err.response);
    }
  };


  let cancelTrip = (id)=> {
    console.log(id)
    axios.put(`http://localhost:4000/trip/${id}/cancel`, {}, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
     console.log(res)
   })
   .catch((err) => console.log(err.response));
 }


  useEffect(() => {
    getUser();
  },[setUser]);
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
                    <Label for="">First Name</Label>
                    <Input type="text"
                        id=""
                        value={user.firstName}
                        name="firstName"
                        onChange={changeHandler}
  />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Last Name</Label>
                    <Input type="text"                    
                        id=""
                        value={user.lastName}
                        name="lastName"
                        onChange={changeHandler} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Email</Label>
                    <Input type="text"
                      id=""
                      value={user.email}
                      name="email"
                      onChange={changeHandler} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">Phone Number</Label> 
                    <Input disabled
                            type="text"
                            id=""
                            name="phoneNumber"
                            value={user.phoneNumber} />
                  </FormGroup>
                </Col>
              </Row>
              <Col className="text-center">
                <Button className="btn-fill" color="danger" size="lg" onClick={updateHandler}>
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
{ user.booked ? 
          user.booked.map((trip) => 
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

                    {/* <p className="fontStyle">{trip.user[0].companyName}</p> */}
                    <Button className="details-btn-c"                       
                    as={Link}
                      to={`/trip/${trip._id}`}
                      replace   >
                        More Details
                        </Button>
                    <Button className="delete-btn-c"
                      onClick={()=> cancelTrip(trip._id)}
                      >Cancel</Button>
                  </CardBody>
                </Card>
              </Col>
              ) : <Col></Col>}
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;

