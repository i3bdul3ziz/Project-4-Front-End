import React, { useState, useEffect } from "react";
import Axios from "axios";
import swal from 'sweetalert';
import "assets/css/sign.css";
import { NotificationManager } from 'react-notifications';

import { Row, Col } from "reactstrap";

function SignupCompany(props) {
  const [company, setCompany] = useState({}); // user info
  const [signup, setSignup] = useState(false); // to show aleart

  //to add the input inside user
  let onChangeInput1 = ({ target: { name, value } }) => {
    setCompany({ ...company, [name]: value });
  };

  // to add the user info to database
  let onSubmit = (e) => {
    e.preventDefault();
    if (company.password == company.conPassword) {
    Axios.post("http://localhost:4000/company/signup", company)
      .then((res) => {
        if (res.data.signup) {
            props.history.push("/companysignin");
            NotificationManager.success('You have signed up!', 'Successful!', 300);
        } else {
          setSignup(true);
          setTimeout(() => {
            setSignup(false);
          }, 4000);
        }
      })
      .catch((err) => console.log(err));
    } else {
      swal({
        title: "Passwords are not equals!",
        icon: "warning",
      });
    }
  };

  return (
    <div className="body1">
      <div id="wrapper">
        <div id="left">
          <div id="signin">
            <br /> <br />
            <br />
            <h4>SIGN UP FOR COMPANIES</h4>
            <br />
            <form onSubmit={(e) => onSubmit(e)}>
              <Row>
                <Col>
                  <div>
                    <label>Company Name</label>
                    <input
                      name="companyName"
                      type="text"
                      class="text-input"
                      onChange={(e) => onChangeInput1(e)}
                    />
                  </div>
                </Col>
                <Col>
                  <div>
                    <label>License Number</label>
                    <input
                      name="licensesNumber"
                      type="text"
                      class="text-input"
                      onChange={(e) => onChangeInput1(e)}
                    />
                  </div>
                </Col>
              </Row>
              <div>
                <label>Company Phone Number</label>
                <input
                  name="companyPhoneNumber"
                  type="text"
                  class="text-input"
                  onChange={(e) => onChangeInput1(e)}
                />
              </div>
              <div>
                <label>Company Email</label>
                <input
                  name="companyEmail"
                  type="text"
                  class="text-input"
                  onChange={(e) => onChangeInput1(e)}
                />
              </div>
              <Row>
                <Col>
                  <div>
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      class="text-input"
                      onChange={(e) => onChangeInput1(e)}
                    />
                  </div>
                </Col>
                <Col>
                  <div>
                    <label>Confirm Password</label>
                    <input
                      name="conPassword"
                      type="password"
                      class="text-input"
                      onChange={(e) => onChangeInput1(e)}
                    />
                  </div>
                </Col>
              </Row>
              <button type="submit" class="primary-btn">
                Sign Up
              </button>
            </form>
            <div class="links">
              <a href="/usersignup">Are you a user, click here</a>
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

export default SignupCompany;
