import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
  Form,
  Alert
} from "react-bootstrap";
import DonationDataService from '../Services/DonationDB';
import "../Styles/Style.css";


const crossBtnStyle = {
  width: '10%',
  borderRadius: '15px',
  fontSize: '26px',
  backgroundColor: '#072A52',
  fontWeight: '900',
  border: 'none',
  margin: '5%',
  float: 'right'

}

function DonateNow() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [donateVia, setDonateVia] = useState();
  const [errorMessage, setErrorMessage] = useState({
    error: false,
    msg: ''
  });

  const [donateOptions, setDonateOptions] = useState({
    opt1: 'Books',
    opt2: 'Video Contents'
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (name === '' || email === '' || phone === '' || donateVia === '') {
      setErrorMessage({ error: true, msg: 'All fields are mandatory' });
      return
    }

    const newDonations = {
      name,
      email,
      phone,
      donateVia
    }

    try {
      await DonationDataService.addDonations(newDonations);
      setErrorMessage({ error: false, msg: 'Your response has been recorded. We will contact you shortly' })
      // setShow(false);
    } catch (err) {
      setErrorMessage({ error: true, msg: err.message })
      // setShow(false);
      // alert(errorMessage.msg);
    }
    // setShow(false);
    setName("");
    setEmail("");
    setPhone("");
    setDonateOptions({ opt1: '', opt2: '' });

  }

  console.log(show);
  return (
    <Container fluid className="DonateContainer">
      <Row>
        <Col xs={12} sm={12} md={6} className="DonateColumn1">
          {show === false ? (
            <Button className="Donate_btn" onClick={() => setShow(true)}>
              Request for donation
            </Button>
          )
            : (
              <Button style={crossBtnStyle} type='submit' onClick={handleSubmit}>
                <i className="fa fa-paper-plane"></i>
              </Button>
            )
          }
        </Col>
      </Row>
      {show === true ? (
        <Col xs={12} sm={12} md={6} className="DonateColumn1">
          {
            errorMessage?.msg && (
              <Alert
                variant={errorMessage?.error ? "danger" : "success"}
                dismissible
                onClose={() => setErrorMessage("")}
              >
                {errorMessage?.msg}
              </Alert>
            )
          }
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Full Name"
              >
                <Form.Control
                  type="email"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Email address"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-1 g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Phone Number"
              >
                <Form.Control
                  type="email"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="How would you donate us?"
              >
                <Form.Select aria-label="Floating label select example" onChange={(e) => setDonateVia(e.target.value)}>
                  <option>Open this select menu</option>
                  <option value={donateOptions.opt1}>Donate Books</option>
                  <option value={donateOptions.opt2}>Donate Video Contents</option>
                </Form.Select>
              </FloatingLabel>
            </Col>

          </Row>
        </Col>
      ) : (
        ""
      )}
      <Row></Row>
    </Container>
  );
}

export default DonateNow;
