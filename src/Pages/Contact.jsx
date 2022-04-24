import React from "react";
import { async } from "@firebase/util";
import Navigation from "../Components/Navigation";
import GetInTouch from "../Views/GetInTouch";
import Footer from "../Views/Footer";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import contactDataService from '../Services/ContactDB';
import '../Styles/Style.css';

function Contact() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [subject, setSubject] = React.useState();
  const [message, setMessage] = React.useState();
  // Error Message
  const [errorMessage, setErrorMessage] = React.useState({
    error : false,
    msg : ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if(name === "" || email === "" || phone === "" || subject === "" || message === ""){
      setErrorMessage({ error:true , msg:"All fields are mandatory" });
      return;
    }
    const newContact = {
      name,
      email,
      phone,
      subject,
      message
    }

    try {
      await contactDataService.addContact(newContact);
      setErrorMessage({ error: false , msg: 'Your response has been recieved successfully'});
    } catch(err){
       setErrorMessage({ error: true , msg : err.message});
    }
    // empty the field after responce added
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  }

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
              {
                errorMessage?.msg && (
                  <Alert 
                    variant={errorMessage?.error ? "danger":"success"}
                    dismissible
                    onClose={()=>setErrorMessage("")}
                  >
                    {errorMessage?.msg}
                  </Alert>
                )
              }
              <Form className='mt-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="input"
                    placeholder="Your Name"
                    className="inputs"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="inputs"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="input"
                    placeholder="Phone Number"
                    className="inputs"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="input"
                    placeholder="Subject"
                    className="inputs"
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    className="inputs"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" style={{textAlign:'end'}}>
                  <Button className="submitMsg" type="Submit">Send</Button>
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
