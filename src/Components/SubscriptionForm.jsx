import React from 'react';
import subscribeDataService from '../Services/SubscribeMailDB';
import {Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const listStyle = {
    fontWeight : '200',
    color: 'white',
    textDecoration: 'none'
}
function SubscriptionForm(){
    const [subscriptionMail, setSubscriptionMail] = React.useState();
    // Error Message
    const [errorMessage, setErrorMessage] = React.useState({
        error : false,
        msg : ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        if(subscriptionMail === ""){
            setErrorMessage({error: true , msg : 'Email is mandatory for subscription'});
            return;
        }
        const newMail = {
            subscriptionMail
        }
        
        try{
            await subscribeDataService.subscribeMail(newMail);
            setErrorMessage({error: false , msg: 'Your mail has been recieved'});
        } catch(err){
            setErrorMessage({error: true, msg : err.message});
        }

        // field empty after subscription of mail
        setSubscriptionMail("")
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="subscribeWithMail mt-5">
                <Form.Control
                    className="SubscribeInput"
                    type="email"
                    placeholder='Subscribe for mail'
                    value = {subscriptionMail}
                    onChange={(e)=>setSubscriptionMail(e.target.value)}
                />
                <Button variant="danger" className="SubecribeButton" type="Submit">Subscribe</Button>
              </Form.Group>
            </Form>
            <div className='list mt-5'>
                <div>
                    <ul>
                        <li><h6>EduDoor</h6></li>
                        <Link to="/" style={listStyle}><li>Home</li></Link>
                        <Link to="/Company" style={listStyle}><li>About</li></Link>
                        <Link to="/Agreement" style={listStyle}><li>Collaborate with us</li></Link>
                        <Link to="/Founding" style={listStyle}><li>Founding members</li></Link>
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