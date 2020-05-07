import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
function Index() {
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
      <IndexHeader />
      <div className="main">
        <DemoFooter />
      </div>
    </>
  );
}
export default Index;
