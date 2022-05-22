import React , {useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap';

function ContactForm(){
    const [mail, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // console.log(mail);
    // console.log(subject);
    // console.log(message);
    return(
        <Container>
              <h1 className="formHeading mb-5 mt-5">Contact Us</h1>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type='email'
                    placeholder="Email Address"
                    className="inputs"
                    onChange = {(e)=>setMail(e.target.value)}
                  />
                </Form.Group>  
                <Form.Group className="mb-3">
                  <Form.Control
                    type='input'
                    placeholder="Subject"
                    className="inputs"
                    onChange = {(e)=>setSubject(e.target.value)}
                  />
                </Form.Group>  
                <Form.Group className="mb-3">
                  <Form.Control
                    as='textarea'
                    rows={5}
                    placeholder="Message"
                    className="inputs"
                    onChange = {(e)=>setMessage(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Button type='submit' className="submitButton">Send</Button>
                </Form.Group>  
              </Form>              
        </Container>
    )
}

export default ContactForm;