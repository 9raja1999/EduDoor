import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar className="navigation" collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Link to="" style={{ textDecoration: "none" }}>
          <Navbar.Brand id="brand">EDUDOOR</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ backgroundColor: "#146eb3", color: "white" }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Link to="/Signup">
              <Button variant="custom" id="CreateAcc_btn">
                Create an Account
              </Button>
            </Link>

            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <NavDropdown.Item id="nav-subdropdown">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#146eb3" }}
                >
                  Student
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
