import React from "react";
import { Container } from "reactstrap";


function FamilyTripHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/pexels-photo-130111.jpeg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 Style={"margin: -15% 0 0 0"} className="presentation-title1">Family Trips</h1>
            </div>

            <h2 Style={ "margin: 20px auto 0 auto; width:70%;"} className="presentation-subtitle text-center">
            Nothing is more important and fun than having a vacation as a family. Family bonds will be stronger by spending more time together in the most beautiful places in Saudi Arabia.
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default FamilyTripHeader;
