import React, {useState} from "react";
import Axios from "axios";
import swal from 'sweetalert';

import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

export default function Reset(props) {
  const [password, setPassword] = useState('');
  let Submit = (e) => {
    e.preventDefault();
    Axios.post(
      `http://localhost:4000/user/reset/${props.match.params.token}`,password
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    swal({
      title: "Resetting Password",
      text: "Your password has been changed successfully!",
      icon: "success",
    });

  };

  let change = (e) => {
    setPassword({...password, password: e.target.value })
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
                  <label>Enter Your New Password</label>
                  <Input name="password" placeholder="New Password" type="password" onChange={(e) => change(e)}/>

                  <Button block className="btn-round" onClick={(e) => Submit(e)}>
                    Reset Password{" "}
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
