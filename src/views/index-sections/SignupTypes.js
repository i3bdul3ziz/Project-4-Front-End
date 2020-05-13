import React, { Component } from "react";
import "assets/css/usertypes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHiking } from "@fortawesome/free-solid-svg-icons";

function SignupTypes() {
  return (
    <>
    <div className="fullHeight">
      <a href="/usersignup" class="split left ">
        <div className="centered">
          <FontAwesomeIcon size="7x" icon={faHiking} />
          <h4>Sign Up As A Tourist</h4>
        </div>
      </a>
      <a href="/companysignup" class="split right ">
        <div className="centered">
          <FontAwesomeIcon size="7x" icon={faBuilding} />
          <h4>Sign Up As A Company</h4>
        </div>
      </a>
    </div>
    </>
  );
}

export default SignupTypes;
