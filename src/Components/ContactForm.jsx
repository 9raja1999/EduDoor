import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

function ContactForm(){
    return(
        <Container>
              <h1 className="formHeading mb-5 mt-5">Contact Us</h1>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type='email' placeholder="Email Address" className="inputs"/>
                </Form.Group>  
                <Form.Group className="mb-3">
                  <Form.Control type='input' placeholder="Subject" className="inputs"/>
                </Form.Group>  
                <Form.Group className="mb-3">
                  <Form.Control as='textarea' rows={5} placeholder="Message" className="inputs"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Button className="submitButton">Send</Button>
                </Form.Group>  
              </Form>              
        </Container>
    )
}

export default ContactForm;