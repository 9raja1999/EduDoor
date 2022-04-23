import React from "react";
import Navigation from "../Components/Navigation";
import GetInTouch from "../Views/GetInTouch";
import Footer from "../Views/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {} from 'google-maps-react';
import '../Styles/Style.css';

function Contact() {
  return (
    <>
      <Navigation />
      <Container fluid className='ContactPage mb-5 mt-5'>
        <Row>
          <Col xs={12} md={12} lg={12} className='twentyFourContact'>
            <Container>
              <h1 className="mb-3 mt-5">Contact <span>Us</span></h1>
              <p>
              For the customer support and feedback contact us via contact form 24/7
              </p>
              <Form className='mt-5'>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="input"
                    placeholder="Your Name"
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="input"
                    placeholder="Phone Number"
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="input"
                    placeholder="Subject"
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3" style={{textAlign:'end'}}>
                  <Button className="submitMsg">Send</Button>
                </Form.Group>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Contact;
