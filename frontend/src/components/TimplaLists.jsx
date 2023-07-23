import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

function TimplaLists() {
  return (
    <div className="mx-5 px-5">
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Your Timpla's List</h3>
            </Col>
          </Row>
        </div>
      </Col>
    </div>
  );
}

export default TimplaLists;
