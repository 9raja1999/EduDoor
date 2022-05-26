import React from "react";
import { Container, Row, Col, Navbar, Form, Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CollaborationDataDervice from '../Services/CollaborationDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import colaborationImage from "../Assets/Collaboration/collaboration.jpg";
import "../Styles/Agreement.css";
import { async } from "@firebase/util";

function Agreement() {
    const [show, setShow] = React.useState(false);
    const [partner, setPartner]= React.useState('');
    const [companyName, setCompanyName] = React.useState();
    const [email, setEmail] = React.useState();
    const [address1, setAddress1] = React.useState()
    const [address2, setAddress2] = React.useState()
    const [city, setCity] = React.useState()
    const [state, setState] = React.useState()
    const [zip, setZip] = React.useState()
    // console.log(state);
    const Proceed = () => {
        if(partner == ''){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(companyName==='' || email === '' || address1 === '' || city === '' || state === '' || zip === ''){ 
            Swal.fire({type:'error',text:'All fields are mandatory'});
            return;
        }
        // else{
        //     Swal.fire({type:'success',text:'Thanks! we will consider your response and let you know soon'});
        // }
        const newCollaboration = {
            partner,
            companyName,
            email,
            address1,
            address2,
            city,
            state,
            zip
        }
        try{
            await CollaborationDataDervice.addCollaborationRequest(newCollaboration);
            Swal.fire({type:'success',text:'Thanks! we will consider your response and let you know soon'});
        }catch(err){
            Swal.fire({type:'error',text:err.message});
        }


        // All fields empty
        setCompanyName('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setCity('')
        setState('')
        setZip('')
    }
    console.log(partner);
    return (
        <Container fluid className="userAgreement_container">
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className="myRateusModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        id="example-custom-modal-styling-title"
                        className="RateusHeader"
                    >
                        <h1>
                            Collaboration <span>Application Form</span>
                        </h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="RateusModal">
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Company name"
                                    value={companyName}
                                    onChange={
                                        (e)=>setCompanyName(e.target.value)
                                    }/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value = {email}
                                    onChange = {
                                        (e)=>setEmail(e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type= 'text'
                                placeholder="1234 Main St"
                                value = {address1}
                                onChange = {
                                    (e)=>setAddress1(e.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2(optional)</Form.Label>
                            <Form.Control
                                type ='text'
                                placeholder="Apartment, studio, or floor"
                                value = {address2}
                                onChange = {
                                    (e)=>setAddress2(e.target.value)
                                }
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder = 'city'
                                    value = {city}
                                    onChange = {
                                        (e)=>setCity(e.target.value)
                                    }
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose..." onChange={e => setState(e.target.value)}>
                                    <option>Choose...</option>
                                    <option value='karachi'>Karachi</option>
                                    <option value='islamabad'>Islamabad</option>
                                    <option value='lahore'>Lahore</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder="ZIP"
                                    value = {zip}
                                    onChange = {
                                        (e)=>setZip(e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit" className="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>


            <Row>
                <Col md={12} xs={12} sm={12}>
                    <Navbar>
                        <Container>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Navbar.Brand id="brand">EDUDOOR</Navbar.Brand>
                            </Link>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    <Link to="/" style={{textDecoration:'none'}}>
                                        <i className="cross fa fa-times"></i>
                                    </Link>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            <Row className="imageRow mt-5">
                <Col md={6} xs={12} sm={12} lg={6} className="imageRowColumn">
                    <img src={colaborationImage} width="100%" />
                </Col>
                <Col md={6} xs={12} sm={12} lg={6} className="ParagraphColumn mt-5">
                    <h4>
                        Purpo<span>s</span>e
                    </h4>
                    <p>
                        Thankyou for your interest in becomming an authorized partner.
                        Please fill out the application form below We will follow up with
                        you after we review your application
                    </p>
                    <p>
                        Please indicate how wouold you like to <span>partner</span> with us
                    </p>
                    <Form>
                        {["radio"].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Organization"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    value = 'organization'
                                    onChange={(e)=>setPartner(e.target.value)}
                                    />
                                <Form.Check
                                    inline
                                    label="NGO"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    value = 'ngo'
                                    onChange={(e)=>setPartner(e.target.value)}
                                    />
                                <Form.Check
                                    inline
                                    label="Teacher"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                    value = 'teacher'
                                    onChange={(e)=>setPartner(e.target.value)}
                                />
                            </div>
                        ))}
                    </Form>
                    <Button className="NextButton" onClick={() => Proceed()}>Next</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Agreement;
