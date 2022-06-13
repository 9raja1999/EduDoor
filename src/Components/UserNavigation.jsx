import React from "react";
import {useNavigate} from 'react-router-dom';
import { useUserAuth } from "../Context/UserAuthContext";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

function UserNavigation(props) {
  const { user, logOut } = useUserAuth();
  let navigate = useNavigate();
  // console.log(user);
  // localStorage.setItem('items', JSON.stringify(user));
  const handleLogOut = () => {
    // window.localStorage.setItem('currUser',JSON.stringify({status : false}))
    window.localStorage.clear();
    navigate('/');
  };
  return (
    <>
      <Navbar className="userNavigation" collapseOnSelect expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand id='myBrand'>PARHAI CASTLE</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ backgroundColor: "#146eb3", color: "white" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Button variant="custom" id="welcomeMsg">
                Welcome! <span>on board</span>
              </Button>
              <Button variant="custom" id="logout_btn" onClick={handleLogOut}>
                Logout <i className="fa fa-user"></i>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UserNavigation;
