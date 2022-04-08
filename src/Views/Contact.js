import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap'

function Contact(){
    return(
        <Container fluid className='contactContainer'>
                    <div className='contactCard'>
                    <h6><i className='fa fa-envelope'></i> EduDoor@gmail.com</h6>
                    </div>
                    <div className='contactHeading'>
                        <h6>Contact Us: </h6>
                    </div>
        </Container>
    )
}

export default Contact;