import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import SubscriptionForm from "../Components/SubscriptionForm";
import ContactForm from "../Components/ContactForm";
import '../Styles/Style.css';


function GetInTouch() {
  return (
    <Container fluid style={{backgroundColor: '#072A52'}}>
      <Row  className='footerNav'>
        <Col xs={12} md={12} lg={6}>
            <Navbar className="mt-3">
              <Container>
                <Navbar.Brand id="brand">Edudoor</Navbar.Brand>
              </Container>
            </Navbar>
        </Col>
        <Col xs={12} md={12} lg={6} className=''>
            <Navbar className="mt-3">
              <Container>
                <Navbar.Collapse className="justify-content-end">
                  <Nav className="socialIconsHolder">
                    <Nav.Link><i className="fa fa-facebook social"></i></Nav.Link>
                    <Nav.Link><i className="fa fa-instagram social"></i></Nav.Link>
                    <Nav.Link><i className="fa fa-twitter social"></i></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </Col>
        <div className='JoinNowText'>
          <h1 className="joinNow-heading">Join <span>Now!</span></h1>
          <p>So what are you waiting for? Signup today and start learning today!</p>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={6} className='footerNavContactForm'>
            <SubscriptionForm />
        </Col>
        <Col xs={12} md={12} lg={6} className='footerNavContactForm'>
            <ContactForm />            
        </Col>
      </Row>
    </Container>
  );
}

export default GetInTouch;
