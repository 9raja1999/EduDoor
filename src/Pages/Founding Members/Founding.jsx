import React from "react";
import { Container, Row, Col, Navbar, Form, Button, Modal, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Founding.css';
// importing founding members images
import member1 from '../../Assets/Founding members/Aitzaz.jpeg';
import member2 from '../../Assets/Founding members/Aizaz.jpeg';
import member3 from '../../Assets/Founding members/Habibullah.jpeg';
import member4 from '../../Assets/Founding members/Safiullah.jpeg';
import member5 from '../../Assets/Founding members/Sameen.jpeg';

const cards = [
    { image: member1, name: 'Mr. Aitzaz' },
    { image: member2, name: 'Mr. Aizaz' },
    { image: member3, name: 'Mr. Habibullah' },
    { image: member4, name: 'Mr. Safiullah' },
    { image: member5, name: 'Mr. Sameen' },
]
function Founding() {
    return (
        <Container fluid className="foundingMembers_container">
            <Row>
                <Col md={12} xs={12} sm={12}>
                    <Navbar>
                        <Container>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Navbar.Brand id="brand">PARHAICASTLE</Navbar.Brand>
                            </Link>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <i className="cross fa fa-times"></i>
                                    </Link>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col md={12} xs={12} lg={12}>
                    <div className='FoundingHead'>
                        <h1>Founding <span>Members</span> </h1>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 foundingMembers" style={{justifyContent:'center'}}>
                {
                    cards.map((obj, idx) => {
                        return (
                            <Col md={4} xs={12} lg={4} style={{textAlign:'center'}}>
                                <Card style={{ width: '18rem' , margin : '0 auto' }} className="mt-5">
                                    <Card.Img variant="top" src={obj.image} />
                                    <Card.Body>
                                        <Card.Title><h4 className='membersName'>{obj.name}</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Founding;        