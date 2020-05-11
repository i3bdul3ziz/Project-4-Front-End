import React, { useEffect, useState } from "react";
import '../assets/css/app.css'
import jwt_decode from "jwt-decode";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionLogin from "./index-sections/SectionLogin.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupUser from "./index-sections/SignupUser";
import Home from "./index-sections/Home.js";
import SignupCompany from "./index-sections/SignupCompany.js";
import UserTypes from "./index-sections/UserTypes.js";
import FamilyTrip from '../components/FamilyTrip/FamilyTrip'
import FriendsTrip from '../components/FreindsTrip/FriendsTrip'
import SinglePersonTrip from "components/SinglePersonTrips/SinglePersonTrip";
import MagicTrip from "components/MagicTrip/MagicTrip.jsx";
import SectionNavbars from "../views/index-sections/SectionNavbars";
import SingleTripShow from "assets/scss/paper-kit/ShowPages/SingleTripShow";
import UserProfile from "components/Profiles/UserProfile";
import CompanyProfile from "components/Profiles/CompanyProfile";
import CreatePage from "components/TripForm/CreatePage";
import EditPage from "components/TripForm/EditPage";
import Forgot from "components/auth/Forgot";
import Reset from "components/auth/Reset";

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
          <Route path="/home" render={(props) => <Home {...props} />} />
          <Route
            path="/usersignup"
            render={(props) => <SignupUser {...props} />}
          />
          <Route
            path="/companysignup"
            render={(props) => <SignupCompany {...props} />}
          />
          <Route path="/signup" render={(props) => <UserTypes {...props} />} />
          <Route path="/familytrip" render={(props) => <FamilyTrip {...props} />} />
          <Route path="/friendstrip" render={(props) => <FriendsTrip {...props} />} />
          <Route path="/indpendenttrip" render={(props) => <SinglePersonTrip {...props} />} />
          <Route path="/magictrip" render={(props) => <MagicTrip {...props} />} />
          <Route path="/test" render={(props) => <SectionNavbars {...props} />} />
          <Route path="/Tripshow" render={(props) => <SingleTripShow {...props} />} />
          <Route path="/userprofile" render={(props) => <UserProfile {...props} />} />
          <Route path="/Companyprofile" render={(props) => <CompanyProfile {...props} />} />
          <Route path="/createtrip" render={(props) => <CreatePage {...props} />} />
          <Route path="/edittrip" render={(props) => <EditPage {...props} />} />
          <Route path="/forgotpass" render={(props) => <Forgot {...props} />} />
          <Route path="/resetpass" render={(props) => <Reset {...props} />} />
          <Redirect to="/home" />
        </Switch>
        <DemoFooter />
      </div>
    </>
  );
}
export default App;
