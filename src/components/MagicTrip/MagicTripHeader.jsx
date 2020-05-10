import React from "react";
import { Container } from "reactstrap";


function MagicTripHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/photo-1484069560501-87d72b0c3669.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 Style={"margin: -15% 0 0 0"} className="presentation-title1">Magic Trips</h1>
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

export default MagicTripHeader;
