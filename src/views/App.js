import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionLogin from "./index-sections/SectionLogin.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupUser from "./index-sections/SignupUser"
import Home from "./index-sections/Home.js";
import SignupCompany from "./index-sections/SignupCompany.js";
import UserTypes from "./index-sections/UserTypes.js";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  let userSignin = () => {
    if (localStorage.token) {
      let token = localStorage.token;
      let user = jwt_decode(token, "SECRET").user;
      setUser(user);
      setIsLogin(true);
    } else {
      setUser(null);
      setIsLogin(false);
    }
  };
  let isLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLogin(false);
  };
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
      userSignin();
    };
  });
  return (
    <>
      <IndexNavbar isLogout={isLogout} userSignin={userSignin} />
     
      <div className="main">
        <Switch>
          <Route
            path="/signin"
            render={(props) => <SectionLogin {...props} />}
          />
            <Route
            path="/home"
            render={(props) => <Home {...props} />}
          />
                    <Route
            path="/usersignup"
            render={(props) => <SignupUser {...props} />}
          />
                  <Route
            path="/companysignup"
            render={(props) => <SignupCompany {...props} />}
          />
                  <Route
            path="/signup"
            render={(props) => <UserTypes {...props} />}
          />
          <Redirect to="/home" />
        </Switch>
        <DemoFooter />
      </div>
    </>
  );
}
export default App;
