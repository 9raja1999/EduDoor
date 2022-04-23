import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function SubscriptionForm(){
    const listStyle = {
        fontWeight : '200',
        color: 'white',
        textDecoration: 'none'
    }
    return(
        <Container>
            <Form>
              <Form.Group className="subscribeWithMail mt-5">
                <Form.Control className="SubscribeInput" type="email" placeholder='Subscribe for mail'/>
                <Button variant="danger" className="SubecribeButton">Subscribe</Button>
              </Form.Group>
            </Form>
            <div className='list mt-5'>
                <div>
                    <ul>
                        <li><h6>EduDoor</h6></li>
                        <Link to="/" style={listStyle}><li>Home</li></Link>
                        <Link to="/Company" style={listStyle}><li>About</li></Link>
                        <Link to="/Contact" style={listStyle}><li>Contact</li></Link>
                        <Link to="/signup" style={listStyle}><li>Create an Account</li></Link>
                        <Link to="/login" style={listStyle}><li>Login</li></Link>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default SubscriptionForm;