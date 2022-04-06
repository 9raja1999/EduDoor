import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Navbar, Nav, NavDropdown,Button } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className='navigation' collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand id='brand'>EDUDOOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Button variant='custom'
                    id='CreateAcc_btn'
                    onClick={()=>alert('Create Account')}
            >Create an Account</Button>

            <NavDropdown title="Login" id="collasible-nav-dropdown">
                <NavDropdown.Item
                    id='nav-subdropdown'
                    onClick={()=>alert('Login as Admin')}
                >Admin</NavDropdown.Item>
                <NavDropdown.Item
                    id='nav-subdropdown'
                    onClick={()=>alert('Login as Student')}
                >Student</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
