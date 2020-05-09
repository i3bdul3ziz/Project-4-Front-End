
import React from "react";
import "assets/css/sign.css";


import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";


function SignupUser() {
  return (
    <div className="body1">
      <div id="wrapper">
        <div id="left">
          <div id="signin">
            <br /> <br />
            <br />
            <h3>SIGN UP</h3>
            <br />
            <form>
              <Row>
                  <Col>
                <div>
                  <label>First Name</label>
                  <input type="text" class="text-input" />
                </div>
                </Col>
                <Col>
                <div>
                  <label>Last Name</label>
                  <input type="password" class="text-input" />
                </div>
                </Col>
              </Row>
              <div>
                <label>Phone Number</label>
                <input type="password" class="text-input" />
              </div>
              <div>
                <label>Email</label>
                <input type="text" class="text-input" />
              </div>
              <div>
                <label>Password</label>
                <input type="password" class="text-input" />
              </div>
              <button type="submit" class="primary-btn">
                Sign Up
              </button>
            </form>
            <div class="links">
              <a href="/companysignup">If you are a company, click here</a>
            </div>
          </div>
        </div>
        <div id="right">
          <div id="showcase">
            <div class="showcase-content">
              <h1 class="showcase-text">
              Let's explore <strong>together</strong>
              </h1>
              <a href="/" class="secondary-btn">
                Check out our trips!{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupUser;
