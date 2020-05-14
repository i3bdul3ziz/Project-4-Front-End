import React, { useEffect, useState } from "react";
import "../assets/css/app.css";
import jwt_decode from "jwt-decode";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionLogin from "./index-sections/SectionLogin.jsx";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import SignupUser from "./index-sections/SignupUser";
import Home from "./index-sections/Home.js";
import SignupCompany from "./index-sections/SignupCompany.js";
import SignupTypes from "./index-sections/SignupTypes.js";
import FamilyTrip from "../components/FamilyTrip/FamilyTrip";
import FriendsTrip from "../components/FreindsTrip/FriendsTrip";
import SinglePersonTrip from "components/SinglePersonTrips/SinglePersonTrip";
import MagicTrip from "components/MagicTrip/MagicTrip.jsx";
import SingleTripShow from "../components/ShowPages/SingleTripShow"
import UserProfile from "components/Profiles/UserProfile";
import CompanyProfile from "components/Profiles/CompanyProfile";
import CreatePage from "components/TripForm/CreatePage";
import EditPage from "components/TripForm/EditPage";
import Forgot from "components/auth/Forgot";
import Reset from "components/auth/Reset";
import SigninTypes from "./index-sections/SigninTypes.js";
import CompanySignin from "./index-sections/CompanySignin";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App(props) {
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  let userSignin = () => {
    if (localStorage.token) {
      let token = localStorage.token;
      let user = jwt_decode(token, "SECRET").user;
      setUser(user);
      setIsLogin(true);
      setLoading(true);
    } else {
      setUser(null);
      setIsLogin(false);
      setLoading(true);
    }
  };
  let companySignin = () => {
    if (localStorage.token) {
      let token = localStorage.token;
      let company = jwt_decode(token, "SECRET").company;
      setCompany(company);
      setIsLogin(true);
      setLoading(true);
    } else {
      setCompany(null);
      setIsLogin(false);
      setLoading(true);
    }
  };

  let isLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLogin(false);
    props.history.push("/home")
  };

  function cleanup() {
    document.body.classList.remove("index");
  }
  document.documentElement.classList.remove("nav-open");

  function effect() {
    companySignin();
    userSignin();
    document.body.classList.add("index");
  }

  useEffect(() => {
    effect();
    return () => {
     
    };
  }, []);

 

  console.log(isLogin)
  console.log(company)
  console.log(loading)
  console.log(user)

  return (
    <>
      <IndexNavbar
        isLogout={isLogout}
        isLogin={isLogin}
        userSignin={userSignin}
        companySignin={companySignin}
        user={user}
        company={company}
      />
      {loading &&
      <>
      <div className="main">
        <Switch>
          <Route path="/home" render={(props) => <Home {...props} />} />

            <Route
              path="/signup"
              render={(props) => <SignupTypes {...props} />}
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
                path="/signin"
                render={(props) => <SigninTypes {...props} />}
              />
              <Route
                path="/companysignin"
                render={(props) => (
                  <CompanySignin {...props} companySignin={companySignin} />
                  )}
              />
                  <Route
                    path="/usersignin"
                    render={(props) => (
                      <SectionLogin {...props} userSignin={userSignin} />
                      )}
                  />
            { isLogin &&
            <>
           <Route
             path="/familytrip"
             render={(props) => <FamilyTrip {...props} />}
           />
           <Route
             path="/friendstrip"
             render={(props) => <FriendsTrip {...props} />}
           />
           <Route
             path="/indpendenttrip"
             render={(props) => <SinglePersonTrip {...props} />}
           />
           <Route
             path="/magictrip"
             render={(props) => <MagicTrip {...props} />}
           />
           <Route
             path="/trips/:id"
             render={(props) => <SingleTripShow {...props} user={user} />}
           />
            {user ?
            <Route
              path="/userprofile/:id"
              render={(props) => <UserProfile {...props} user={user}/>}
            />

            : <>
            {company ?
            <>
            <Route
              path="/companyprofile/:id"
              render={(props) => <CompanyProfile {...props} company={company}/>}
            />
            <Route
              path="/createtrip"
              render={(props) => <CreatePage {...props} company={company} />}
              />
              <Route
                path="/edittrip/:id"
                render={(props) => <EditPage {...props} company={company} />}
              />
              </>
            :
              <Redirect to="/home"/>
            }</>
            }
           </>
            }
          <Route path="/forgotpass" render={(props) => <Forgot {...props} />} />
          <Route
            path="/reset/:token"
            render={(props) => <Reset {...props} />}
          />
        </Switch>
        <NotificationContainer />
      </div>
</>
      }
      <DemoFooter />
    </>
  );
}
export default withRouter(App);
