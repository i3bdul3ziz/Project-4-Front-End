import React from "react";

import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

export default function Reset() {
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
                  <Input placeholder="New Password" type="text" />

                  <Button block className="btn-round">
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
