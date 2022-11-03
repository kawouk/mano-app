import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row className="footer-container__row">
        <Col xs={2} className="footer-container__row__col-logo">
          <div className="logo-container">
            <h1 className="navbar__container__brand">
              M<span>ano app</span>
            </h1>
          </div>
        </Col>
        <Col xs={5} className="footer-container__row__col-address">
          <div className="address-container">
            <h3 className="address-container__header">Address</h3>
            <div className="address-container__link-container">
              <CiLocationOn className="loc-icon" />
              <a className="address-container__link" href="">
                Amesterdam 2045 street
              </a>
            </div>
          </div>
        </Col>
        <Col xs={5} className="footer-container__row__col-conatct">
          <div className="conatct-container">
            <h3 className="address-container__header">Contact Us</h3>
            <div className="address-container__link-container">
              <CiPhone className="loc-icon" />
              <a className="address-container__link" href="">
                +00 254 854 965 851
              </a>
            </div>
            <div className="address-container__link-container">
              <CiMail className="loc-icon" />
              <a className="address-container__link" href="">
                mano@mano.com
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
