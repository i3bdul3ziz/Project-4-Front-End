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

export default function EditTripForm() {
  const [image, setImage] = useState(null);
  const [trip, setTrip] = useState("");

  let onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setTrip({ ...trip, tripImages: URL.createObjectURL(img) });
    }
  };

  let onChangeTime = (value) => {
    setTrip({ ...trip, startDate: value._d });
  };

  let onSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:4000/trip/edit`, trip)
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

  return (
    <div className="section landing-section">
      <Container>
        <Row>
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
                    >
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Date Picker Here" }}
                        name="startDate"
                        onChange={(e) => onChangeTime(e)}
                      />
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
                  <div className="">
                    <input
                      type="file"
                      id="file-input"
                      name="tripImages"
                      onChange={(e) => onImageChange(e)}
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
                  Edit the trip!
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
