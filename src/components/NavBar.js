import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  const navigate = useNavigate();
  const { realUser, setRealUser, setIsAuth, item } = useContext(LoginContext);
  const [show, setShow] = useState(false);
  const handleSignOut = () => {
    setRealUser({});
    setIsAuth(false);
    navigate("/");
  };
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="navbar__container">
        <Navbar.Brand className="navbar__container__brand">
          M<span>ano app</span>
        </Navbar.Brand>
        <Navbar.Toggle id="nav-toggle" />
        <Navbar.Collapse>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto navbar__container__nav-links-con">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search"
                  className={show ? "" : "hidden"}
                />
                <AiOutlineSearch
                  className="nav-icon"
                  onClick={() => setShow(!show)}
                />
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="nav-icon">
                <AiOutlineShoppingCart className="" />
                <div className="nav-icon__counter">{item}</div>
              </div>
            </Nav.Link>
            <div className="me-auto navbar__container__nav-links-con__drop">
              <img src={realUser.picture} />
              <NavDropdown title="" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.2">Account</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Cart</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  <button onClick={handleSignOut}>Log Out</button>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
