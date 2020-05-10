import React from "react";
import { Container } from "reactstrap";


function FriendsTripHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/photo-1573858264716-6a3424dc35a2.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 Style={"margin: -15% 0 0 0"} className="presentation-title1">Friends Trips</h1>
            </div>

            <h2 Style={ "margin: 20px auto 0 auto; width:70%;"} className="presentation-subtitle text-center">
            There is a whole world out there. Pack your backpack, your friends and go.
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default FriendsTripHeader;
