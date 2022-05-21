import React, { useState } from "react";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch  from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
import DragContainer from './DragContainer';
import UserNavigation from "../../Components/UserNavigation";
import Footer from '../../Views/Footer';
import "../../Styles/RequestTution.css";

function TutionRequest() {
    const {user} = useUserAuth();
    const [priorities , setPriorities] = useState([]);
    const [currentUser, setCurrentUser] = useState(user.email)
    
    const getData = (val) =>{
        setPriorities(val)
    }
    console.log(priorities)
    // console.log(currentUser);
    return (
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
            <Container
                fluid
                className="RequestTutionContainer"
                style={{ minHeight: "100vh" }}
            >
                <Row>
                    <UserNavigation />
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12} className="AskQuestion_Column mt-5">
                        <h1>
                            Request for <span>tutions</span>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12} className="requestTution_Form mt-5">
                        <Form>
                            <Form.Group
                                style={{ display: "flex", justifyContent: "space-around" }}
                            >
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        First Name <span>*</span>
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="First name" />
                                </div>
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Last Name <span>*</span>
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Last name" />
                                </div>
                            </Form.Group>
                            <Form.Group
                                className='mt-3'
                                style={{ display: "flex", justifyContent: "space-around" }}
                            >
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Guardian Name <span>*</span>
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Guardian name" />
                                </div>
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control type="text" value={currentUser} readonly/>
                                </div>
                            </Form.Group>
                            <Form.Group
                                className="mt-3"
                                style={{ display: "flex", justifyContent: "space-around" }}
                            >
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Date of birth <span>*</span>
                                    </Form.Label>
                                    <Form.Control type="date" />
                                </div>
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Gender <span>*</span>
                                    </Form.Label>
                                    <div>
                                        <Form.Check inline label="Male" name="male" type="radio" />
                                        <Form.Check inline label="Male" name="male" type="radio" />
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group
                                className="mt-3"
                                style={{ display: "flex", justifyContent: "space-around" }}
                            >
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Institute Name(school)<span>*</span>
                                    </Form.Label>
                                    <Form.Control type="text" />
                                </div>
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Grade <span>*</span>
                                    </Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            label="Grade 7"
                                            name="Grade 7"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="Grade 8"
                                            name="Grade 8"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="Grade 9"
                                            name="Grade 8"
                                            type="radio"
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col md={12} xs={12} lg={12}>
                        <DragContainer sendData={getData}/>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col md={12} xs={12} lg={12}>
                        <div className="RequestBtn">
                            <Button className="Rbtn">Request</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </DndProvider>
    );
}

export default TutionRequest;
