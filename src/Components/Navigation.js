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

import logo from '../Assets/logo.jpeg'

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar className="navigation" collapseOnSelect expand="lg" sticky="top">
      <Container style={{position : 'relative'}}>
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <Navbar.Brand id="brand">PARHAI CASTLE</Navbar.Brand> */}
          <Navbar.Brand id="brand">
            <img src={logo} width='15%' alt='Parhai Castle' style={{position : 'absolute' , top : '15%' , borderBottomColor : '#072A52' , borderBottom : '5px solid'}}/>
          </Navbar.Brand>
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
                Registration
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="custom" id="CreateAcc_btn">
                Login
              </Button>
            </Link>

            {/* <NavDropdown title="Login" id="collasible-nav-dropdown">
              <NavDropdown.Item id="nav-subdropdown">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#146eb3" }}
                >
                  Student
                </Link>
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
