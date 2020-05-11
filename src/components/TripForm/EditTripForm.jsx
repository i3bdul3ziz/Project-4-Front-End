import React from "react";
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

export default function EditTripForm() {
  return (
    <div className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Edit Your Trip</h2>
            <Form className="contact-form">
              <div className="form-row">
                <FormGroup className="col-md-6">
                  <Label for="inputState">Trip Style</Label>
                  <Input type="select" name="select" id="inputState">
                    <option>Family Trip</option>
                    <option>Friends Trip</option>
                    <option>Solo Trip</option>
                  </Input>
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label for="inputState">Number of People</Label>
                  <Input type="select" name="select" id="inputState">
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
                    <InputGroup className="date" id="datetimepicker">
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Date Picker Here" }}
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
                  <Input type="select" name="select" id="">
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
                  placeholder="Alhada Mountins, Taif, Saudi Arabia"
                />
              </FormGroup>
              <FormGroup>
                <Label for=""> Trip Images</Label>
                <Input
                  type="image"
                  id=""
                  placeholder=""
                />
              </FormGroup>
              <FormGroup>
                  <Label for="">Trip Desicription</Label>
                  <Input
                    placeholder=""
                    type="textarea"
                  />
              </FormGroup>
              <Col className="text-center">
                <Button className="btn-fill" color="danger" size="lg">
                  Update trip!
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
