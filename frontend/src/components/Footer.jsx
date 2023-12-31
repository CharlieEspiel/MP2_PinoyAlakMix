import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpFrom";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
