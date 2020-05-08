/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import "assets/css/sign.css";

// reactstrap components
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

// core components

function SignupUser() {
  return (
    <div className="body1">
      <div id="wrapper">
        <div id="left">
          <div id="signin">
            <br /> <br />
            <br />
            <h2>SIGN UP</h2>
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
                Sign In
              </button>
            </form>
            <div class="links">
              <a href="#">If you are a company, click here</a>
            </div>
          </div>
        </div>
        <div id="right">
          <div id="showcase">
            <div class="showcase-content">
              <h1 class="showcase-text">
                Let's create the future <strong>together</strong>
              </h1>
              <a href="/" class="secondary-btn">
                Check our trips out!{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupUser;
