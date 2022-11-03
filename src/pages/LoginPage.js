import React from "react";
import Login from "../components/Login";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LoginPage() {
  return (
    <Container fluid className="login-container">
      <Row className="login-container__row">
        <Col md={6}></Col>

        <Col className="login-container__col-left" md={5}>
          <div className="login-container__col-left__sub">
            <h2 className="login-container__col-left__welcome">
              Welcome to Mano-app
            </h2>
            <h6 className="login-container__col-left__description">
              Please login to your account
            </h6>
            <Login />
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
