import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  FormGroup,
  Label,
  Row,
  Col,
} from "reactstrap";
import Datetime from "react-datetime";
import Axios from "axios";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function CreateTripForm(props) {


  const [image, setImage] = useState(null);
  const [trip, setTrip] = useState("");
  const [location, setLocation] = useState({currentLocation: {
    lat: 0.0,
    lng: 0.0
  }});


  const mapStyles = {
    margin: "0",
    width: "70%",
    height: "70%",
  };

  // this.onImageChange = this.onImageChange.bind(this);

  let onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({ ...image, image: URL.createObjectURL(img) });
    }
  };

  let onSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:4000/trip/create`, trip)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  let onChangeInput = ({ target: { name, value } }) => {
    setTrip({ ...trip, [name]: value });
  };

  let getLatLng = (lat, lng) => {
    
    setTrip({ ...trip, lat: lat });
    console.log("lat: " + lat);
    console.log("lng: " + lng);
  };

  return (
    <div className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="4">
            <br /> <br />
            <br />
            <br />
            <br />
            <Map
              google={props.google}
              zoom={8}
              style={mapStyles}
              onClick={(e) => getLatLng(e)}
              initialCenter={{ lat: 23.8859
               , lng:  45.0792 }}
            >
              <Marker position={{ lat:  23.8859, lng: 45.0792 }} />
            </Map>
          </Col>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Create A New Trip</h2>
            <Form className="contact-form" onSubmit={(e) => onSubmit(e)}>
              <div className="form-row">
                <FormGroup className="col-md-6">
                  <Label for="inputState">Trip Style</Label>
                  <Input
                    type="select"
                    name="tripStyle"
                    id="inputState"
                    onChange={(e) => onChangeInput(e)}
                  >
                    <option>Family Trip</option>
                    <option>Friends Trip</option>
                    <option>Solo Trip</option>
                  </Input>
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label for="inputState">Number of People</Label>
                  <Input
                    type="select"
                    name="numberOfPeople"
                    id="inputState"
                    onChange={(e) => onChangeInput(e)}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </Input>
                </FormGroup>
              </div>

              <div className="form-row">
                <Col sm="6">
                  <FormGroup>
                    <Label for="inputState">Start Date</Label>
                    <InputGroup
                      className="date"
                      id="datetimepicker"
                      name="startDate"
                      onChange={(e) => onChangeInput(e)}
                    >
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Date Picker Here" }}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText onChange={(e) => onChangeInput(e)}>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>

                <FormGroup className="col-md-6">
                  <Label for="">Duration</Label>
                  <Input
                    type="select"
                    name="duration"
                    id=""
                    onChange={(e) => onChangeInput(e)}
                  >
                    <option>1 Day</option>
                    <option>2 Days</option>
                    <option>3 Days</option>
                    <option>4 Days</option>
                    <option>5 Days</option>
                    <option>1 Week</option>
                  </Input>
                </FormGroup>
              </div>
              <FormGroup>
                <Label for="">Destination</Label>
                <Input
                  type="text"
                  id=""
                  name="destination"
                  placeholder="Alhada Mountins, Taif, Saudi Arabia"
                  onChange={(e) => onChangeInput(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for=""> Trip Images</Label>
                <div className="mb-1">
                  <div className="">
                    <input
                      type="file"
                      id="file-input"
                      name="tripImages"
                      onChange={(e) => onChangeInput(e)}
                    />
                  </div>
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="">Trip Desicription</Label>
                <Input
                  placeholder=""
                  type="textarea"
                  name="description"
                  onChange={(e) => onChangeInput(e)}
                />
              </FormGroup>
              <Col className="text-center">
                <Button className="btn-fill" color="danger" size="lg">
                  Create a new trip!
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8",
})(CreateTripForm);
