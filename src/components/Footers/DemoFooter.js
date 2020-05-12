
import React from "react";
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer id="footer">
      <Container>
        <Row>
          <div className="credits mx-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Plenty of 20s
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;