import React, {useState} from "react";
import Axios from "axios";

import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

export default function Forgot() {
  const [email, setEmail] = useState('');

  let Submit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:4000/user/forgetPass`, email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  let change = (e) => {
    setEmail({ ...email, email: e.target.value });
  };
  return (
    <div>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto">
              <Card className="card-register ml-auto mr-auto">

                <Form className="register-form">
                  <label>Enter Your Email</label>
                  <Input placeholder="Email" type="text" name="email" onChange={(e) => change(e)}/>
                  <Button block className="btn-round" type="submit" onClick={(e) => Submit(e)}>
                    Send Email
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
