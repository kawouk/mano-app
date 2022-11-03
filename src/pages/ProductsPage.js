import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginContext from "../context/LoginContext";

function ProductsPage() {
  const { products, setProducts } = useContext(LoginContext);
  useEffect(() => {
    fetch("https://api.manoapp.com/api/v1/users/products/whats_new")
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setProducts([...products], data);
      });
    console.log(products);
  }, []);
  return (
    <Container className="product-container">
      <Row className="product-container__row">
        <Col md={4} sm={12} className="product-container__row__col">
          <div className="product-container__row__col__card"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductsPage;
