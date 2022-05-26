import React, { useState } from "react";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch  from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
import DragContainer from './DragContainer';
import UserNavigation from "../../Components/UserNavigation";
import Footer from '../../Views/Footer';
import RequestDataService from '../../Services/RequestDB';
import Swal from 'sweetalert2'
import "../../Styles/RequestTution.css";

function TutionRequest() {
    const {user} = useUserAuth();
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [guardian, setGuardian] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [institute, setInstitute] = useState('');
    const [grade, setGrade] = useState('');

    const [priorities , setPriorities] = useState([]);
    const [currentUser, setCurrentUser] = useState(user.email);
    
    
    const getData = (val) =>{
        setPriorities(val)
    }
    // console.log(priorities)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(fName === '' || lName === '' || gender === '' || guardian === '' || institute === '' || birth === '' || grade === ''){
            Swal.fire({type:'error',text:'All fields are mandatory'});
            return
        }
        
        const newRequest = {
            fName,
            lName,
            birth,
            currentUser,
            gender,
            grade,
            guardian,
            institute,
            priorities,
        }

        try{
            await RequestDataService.addRequest(newRequest);
            Swal.fire({type:'success',text:'Thanks! we will consider your response and let you know soon'});
        }catch(err){
            Swal.fire({type:'error',text:err.message});
        }
        
        setFName('');
        setLName('');
        setGuardian('');
        setBirth('');
        setGender('');
        setInstitute('');
        setGrade('');
    }
    // console.log(lName);
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
                                    <Form.Control
                                        type="text"
                                        placeholder="First name"
                                        onChange = {(e)=>setFName(e.target.value)}
                                    />
                                </div>
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Last Name <span>*</span>
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last name"
                                        onChange = {(e)=>setLName(e.target.value)}
                                    />
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
                                    <Form.Control
                                        type="text"
                                        placeholder="Guardian name"
                                        onChange = {(e)=>setGuardian(e.target.value)}
                                    />
                                </div>
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentUser}
                                        readonly
                                    />
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
                                    <Form.Control
                                        type="date"
                                        onChange = {(e)=>setBirth(e.target.value)}
                                    />
                                </div>
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Gender <span>*</span>
                                    </Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="male"
                                            type="radio"
                                            value = 'male'
                                            onChange = {(e)=>setGender(e.target.value)}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="male"
                                            type="radio"
                                            value = 'female'
                                            onChange = {(e)=>setGender(e.target.value)}
                                        />
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
                                    <Form.Control
                                        type="text"
                                        onChange = {(e)=>setInstitute(e.target.value)}
                                    />
                                </div>
                                <div style={{ width: "40%" }}>
                                    <Form.Label>
                                        Grade <span>*</span>
                                    </Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            label="Grade 6"
                                            name="grade6"
                                            type="radio"
                                            value = 'grade6'
                                            onChange = {(e)=>setGrade(e.target.value)}
                                        />
                                        <Form.Check
                                            inline
                                            label="Other"
                                            name="other"
                                            type="radio"
                                            value = 'other'
                                            onChange = {(e)=>setGrade(e.target.value)}
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
                            <Button className="Rbtn" onClick={handleSubmit}>Request</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </DndProvider>
    );
}

export default TutionRequest;
