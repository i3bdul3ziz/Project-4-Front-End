import React, { useState } from "react";
import ImageUploader from 'react-image-uploader'
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function CreateTripForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [image, setImage] = useState(null);
  const [trip, setTrip] = useState("");
  const [obj, setObj] = useState({ lat: 23.8859, lng: 45.0792 });

  const mapStyles = {
    margin: "0",
    width: "70%",
    height: "70%",
  };

  // this.onImageChange = this.onImageChange.bind(this);

  let onImageChange = (event) => {
    console.log(event)

      setTrip({ ...trip, tripImages: event });

  };

  let onChangeTime = (value) => {
    setTrip({ ...trip, startDate: value });

  };

  let onSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:4000/trip/create`, trip, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  let onChangeInput = ({ target: { name, value } }) => {
    console.log(trip);
    setTrip({ ...trip, [name]: value });
  };

  let getLatLng = (m, ma, c) => {
    setObj({ lat: c.latLng.lat(), lng: c.latLng.lng() });

    setTrip({ ...trip, lat: c.latLng.lat(), lng: c.latLng.lng() });
    console.log(c.latLng.lng());
    console.log(c.latLng.lat());
  };

  let uploadImage = (file, done, progress) => {
    console.log(file)
    // console.log(  done)
    // console.log("progress" + progress)
    // do your upload logic here
    let error = null
    let uploadedImageURL = file
    done(error, uploadedImageURL)
      console.log(uploadImage)
  }

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
              onClick={getLatLng}
              initialCenter={{ lat: 23.8859, lng: 45.0792 }}
            >
              <Marker position={obj} />
            </Map>
          </Col>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Create A New Trip</h2>
            <Form className="contact-form">
              <div className="form-row">
                <FormGroup className="col-md-6">
                  <Label for="inputState">Trip Style</Label>
                  <Input
                    type="select"
                    name="tripStyle"
                    id="inputState"
                    onChange={(e) => onChangeInput(e)}
                  >
                    <option>Choose trip style...</option>
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
              </div>

              <div className="form-row">
                <Col sm="6">
                  <FormGroup>
                    <Label for="inputState">Start Date</Label>
                    <InputGroup
                      className="date"
                      id="datetimepicker"
                      name="startDate"
                      onChange={(e) => onChangeTime(e)}
                    >
                      <DatePicker selected={startDate} onChange={(e) => onChangeTime(e)} />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
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
                    <option>Choose the number of days...</option>
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



                <ImageUploader
        onUpload={uploadImage}
        onRender={(props, state) => {
 
          // render customized child image state
          if (props.image) {
            return (
              <div style={{backgroundImage: `url(${props.image})`}} >
                <button onClick={props.onRequestRemove}>Remove</button>
                {props.error && <div>An error occurred</div>}
              </div>
            )
          }
                    // render default child drag target
                    return (
                      <div>
                        <button onClick={props.onUploadPrompt} onChange={onImageChange}>Upload</button>
                      </div>
                    )
                  }}/>

                  {/* <div className="">
                    <input
                      type="file"
                      id="file-input"
                      name="tripImages"
                      onChange={(e) => onImageChange(e)}
                    />
                  </div> */}
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
                <Button className="btn-fill" type="submit" color="danger" size="lg" onClick={(e) => onSubmit(e)}>
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