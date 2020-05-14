import React from "react";
import { Container } from "reactstrap";

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/download.jpeg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 Style={"margin: -20% 0 0 0"}className="presentation-title1">Welcome to Saudi Arabia</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Explore our Country in our way
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
