import React from "react";
import {
    Button,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faUmbrellaBeach,
    faBusAlt,
    faGlobe,
    faDrum
  } from "@fortawesome/free-solid-svg-icons";


function AboutWebsite() {
  
    return (
      
        <div className="section text-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Why Trip To Go?</h2>
              <h5 className="description">
              In order to achieve the <strong>Saudi vision 2030</strong> and due to the rapid tourism era.
              <strong>Trip To Go </strong> is the perfect connection between the tourist and tourism companies for trips 
              that exceeds your expectations in Saudi Arabia. This makes it easy for the tourists to find all the trips 
              from many companies in one place! 
              </h5>
              <br />
              <Button
                className="btn-round btn-color"
                href="/trips"
                onClick={e => e.preventDefault()}
              >
                See Details
              </Button>
            </Col>
          </Row>
          <br />
          
          <br />
          <Row>
          <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                <i className="icon-color2">
                  <FontAwesomeIcon size="" icon={ faUmbrellaBeach} />
                  </i>                </div>
                <div className="description">
                  <h4 className="info-title">Happy Escapes</h4>
                  <p>
                  It infers the vibe of the journey while at the same time sets clear customer expectations
                  </p>
                
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                
                <i className="icon-color3">
                  <FontAwesomeIcon size="" icon={ faDrum} />
                  </i>       
                </div>
                <div className="description">
                  <h4 className="info-title">Mind the Gap</h4>
                  <p className="description">
                  Cultural values reflecting the spirit and character of the city
                  </p>
                 
                </div>
              </div>
            </Col>
           
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                <i className="icon-color1">
                  <FontAwesomeIcon size="" icon={ faGlobe } />
                  </i>         
                </div>
               
                <div className="description">
                  <h4 className="info-title">Keep Calm and Travel On</h4>
                  <p>
                    Clear your mind and enjoy the trip
                  </p>
                
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info ">
                <i className="icon-color">
                  <FontAwesomeIcon size="" icon={ faBusAlt} />
                  </i>              
                </div>
                {/* <i class="fas fa-bus-alt"></i> */}
                <div className="description">
                  <h4 className="info-title">Hop-on, Hop-off</h4>
                  <p>
                   Bus tour that follows a circular route with fixed stops, allowing passengers to disembark and reboard at any stop
                  </p>
                 
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  export default AboutWebsite;