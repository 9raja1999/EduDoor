import React from 'react';
import {
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap';
import UserNavigation from '../Components/UserNavigation';
import '../Styles/RequestTution.css';

function TutionRequest(){
    return(
        <Container
            fluid
            className='RequestTutionContainer'
            style={{ minHeight:'100vh' }}
        >
            <Row>
                <UserNavigation />
            </Row>
            <Row>
                <Col xs={12} md={12} lg={12} className='AskQuestion_Column mt-5'>
                    <h1>Request for <span>tutions</span></h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} lg={12} className='requestTution_Form mt-5'>
                    <Form>
                        <Form.Group style={{display:'flex',justifyContent:'space-around'}}>
                            <div style={{width:'40%'}}>
                                <Form.Label>First Name <span>*</span></Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='First name'
                                />
                            </div>
                            <div style={{width:'40%'}}>
                                <Form.Label>Last Name <span>*</span></Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Last name'
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3' style={{display:'flex', justifyContent:'space-around'}}>
                            <div style={{width:'40%'}}>
                                <Form.Label>Date of birth <span>*</span></Form.Label>
                                <Form.Control
                                    type='date'
                                />
                            </div>
                            <div style={{width:'40%'}}>
                                <Form.Label>Gender <span>*</span></Form.Label>
                                <div>
                                <Form.Check 
                                    inline
                                    label='Male'
                                    name='male'
                                    type='radio'
                                />
                                <Form.Check 
                                    inline
                                    label='Male'
                                    name='male'
                                    type='radio'
                                />
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default TutionRequest;