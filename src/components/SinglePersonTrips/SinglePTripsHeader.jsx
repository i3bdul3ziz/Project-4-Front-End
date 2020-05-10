import React from "react";
import { Container } from "reactstrap";


function SinglePTripsHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/photo-1516685304081-de7947d419d5.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 Style={"margin: -15% 0 0 0"} className="presentation-title1">Solo Trips</h1>
            </div>

            <h2 Style={ "margin: 20px auto 0 auto; width:70%;"} className="presentation-subtitle text-center">
            There are some places in life where you can only go alone. Embrace the beauty of your solo journey.
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SinglePTripsHeader;
