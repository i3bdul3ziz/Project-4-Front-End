import React from "react";
import "../../assets/scss/_TripTypes.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Row,Col,} from "reactstrap";
import { Link } from "react-router-dom"

function TripTypes() {
  
  return ( 
    <div>    
    <div className="container1">
      <h2 id="triptitle"className="title"> Trips Style</h2>
      <Row>
        <Col>
   <div className="card5">
    <h2 className="tripname">Family </h2>
    <i className="ii"><FontAwesomeIcon className="fas fa-arrow-right" size="3x" icon={faArrowRight} /></i>
    <p className="triptype">a family trip.</p>
    <div className="pic"></div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <Link to="/familytrip">
    <button> 
    {/* <a href="/signup"></a> */}
    </button>
    </Link>
  </div>
  </Col>

  <Col>
   <div className="card5 card2">
    <h2 className="tripname">Friends </h2>
    <i className="ii"><FontAwesomeIcon className="fas fa-arrow-right" size="3x" icon={faArrowRight} /></i>
    <p className="triptype">a friends trip.</p>
    <div className="pic"></div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <Link to="/friendstrip">
    <button>
    </button>
    </Link>
  </div>
  </Col>
</Row>

<Row>
  <Col>
   <div className="card5 card3">
    <h2 className="tripname">Indpendent </h2>
    <i className="ii"><FontAwesomeIcon className="fas fa-arrow-right" size="3x" icon={faArrowRight} /></i>
    <p className="triptype">a lonely trip.</p>
    <div className="pic"></div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <Link to="/indpendenttrip">
    <button>
    </button>
    </Link>
  </div>
  </Col>

  <Col>
  <div className="card5 card4">
    <h2 className="tripname">Magic </h2>
    <i className="ii"><FontAwesomeIcon className="fas fa-arrow-right" size="3x" icon={faArrowRight} /></i>
    <p className="triptype">a Surprise trip.</p>
    <div className="pic"></div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <Link to="/magictrip">
    <button>
    </button>
    </Link>
  </div>
  </Col>
  </Row>
</div>

    </div>
  );
}
export default TripTypes;
