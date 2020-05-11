import React, { useState, useEffect } from "react";
import Axios from "axios";
import swal from 'sweetalert';
import "assets/css/sign.css";

import { Row, Col } from "reactstrap";

function SignupUser(props) {
  const [user, setUser] = useState({}); // user info
  const [signup, setSignup] = useState(false); // to show aleart

  //to add the input inside user
  let onChangeInput1 = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  // to add the user info to database
  let onSubmit = (e) => {
    e.preventDefault();
    if (user.password == user.conPassword) {
      Axios.post("http://localhost:4000/user/signup", user)
        .then((res) => {
          if (res.data.signup) {
            props.history.push("/signin");
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
            <h3>SIGN UP</h3>
            <br />
            <form onSubmit={(e) => onSubmit(e)}>
              <Row>
                <Col>
                  <div>
                    <label>First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      class="text-input"
                      onChange={(e) => onChangeInput1(e)}
                    />
                  </div>
                </Col>
                <Col>
                  <div>
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      class="text-input"
                      onChange={(e) => onChangeInput1(e)}
                    />
                  </div>
                </Col>
              </Row>
              <div>
                <label>Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  class="text-input"
                  onChange={(e) => onChangeInput1(e)}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  name="email"
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
              <button
                type="submit"
                class="primary-btn"
              >
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
