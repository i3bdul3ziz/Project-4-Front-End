import React, { useState, useEffect } from "react";
import Axios from "axios";
import "assets/css/sign.css";
import { NotificationManager } from 'react-notifications';


function SectionLogin(props) {
  const [signin, setSignin] = useState({});

  let onChangeInput = ({ target: { name, value } }) => {
    setSignin({ ...signin, [name]: value });

  };
  useEffect(() => {});

  let onSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/user/signin", signin)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.userSignin();
          props.history.push("/home");
          NotificationManager.success('You have signed in!', 'Successful!', 3000);
        } else {
          console.log("email or password is not correct");
        }
      })
      .catch((err) => console.log(err));
  };

  let onChange = (e) => {
    Axios.post("http://localhost:4000/user/forgetPass")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="body1">
      <div id="wrapper">
        <div id="left">
          <div id="signin">
            <br /> <br />
            <br />
            <br />
            <br />
            <h2>SIGN IN</h2>
            <br />
            <br />
            <form onSubmit={(e) => onSubmit(e)}>
              <div>
                <label>Email</label>
                <input name="email" type="text" className="text-input" onChange={(e) => onChangeInput(e)}/>
              </div>
              <div>
                <label>Password</label>
                <input name="password" type="password" className="text-input" onChange={(e) => onChangeInput(e)}/>
              </div>
              <button type="submit" className="primary-btn" >
                Sign In
              </button>
              </form>
            <div className="links">
              <a href="/forgotpass" onClick={(e) => onChange(e)}>Forgot Password</a>
            </div>
            <div className="or">
              <hr className="bar" />
              <span>OR</span>
              <hr className="bar" />
            </div>
            <button className="secondary-btn">
              Create an account
            </button>
          </div>
        </div>
        <div id="right">
          <div id="showcase" className="section-dark">
            <div className="showcase-content">
              <h1 className="showcase-text">
                Let's explore <strong>together</strong>
              </h1>
              <a href="/" className="secondary-btn">
                Check our trips out!{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionLogin;
