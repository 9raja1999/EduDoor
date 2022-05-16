import React, { useState } from "react";
import { Container, Row, Col, Button, FloatingLabel,Form } from "react-bootstrap";
import "../Styles/Style.css";

function DonateNow() {
    const [show, setShow] = useState(false);
    console.log(show);
    return (
        <Container fluid className="DonateContainer">
            <Row>
                <Col xs={12} sm={12} md={6} className="DonateColumn1">
                    {show === false ? (
                        <Button className="Donate_btn" onClick={() => setShow(true)}>
                            Request for donation
                        </Button>
                    ) : (
                        <Button className="crossbutton" onClick={() => setShow(false)}>
                            <i className="fa fa-times"></i>
                        </Button>
                    )}
                </Col>
                {show === true ? (
                    <Col xs={12} sm={12} md={12} className="DonateColumn1">
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Email address">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                ) : (
                    ""
                )}
            </Row>
        </Container>
    );
}

export default DonateNow;
