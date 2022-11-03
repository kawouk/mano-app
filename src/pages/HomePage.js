import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <Container className="home-banner-container">
      <Row className="home-banner-container__row">
        <Col xs={6} className="home-banner-container__row__col-left"></Col>
        <Col xs={6} className="home-banner-container__row__col-right">
          <div className="home-banner-content">
            <h3 className="home-banner-content__header">
              The best shopping platform
            </h3>
            <h6 className="home-banner-content__header">
              Begin your shopping Now
            </h6>
            <button
              className="home-banner-content__button"
              onClick={() => navigate("/product")}
            >
              Go to Shop
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
