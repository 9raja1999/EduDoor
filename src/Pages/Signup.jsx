import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Alert, InputGroup } from "react-bootstrap";
import Navigation from '../Components/Navigation';
import Footer from '../Views/Footer';
import Swal from 'sweetalert2';
import UsersDB from "../Services/UsersDB";
import { async } from "@firebase/util";

function Signup() {
  const [user, setUser] = useState({
    organizationName : '',
    mailingAddress : '',
    contactNumber : '',
    password : '',
    status : false
  });

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(user.organizationName == '' || user.mailingAddress == '' || user.contactNumber == '' || user.password == ''){
      Swal.fire({type: 'error' , text: 'All fields are mandatory'})
    }
    const newUser = user;
    try{
      await UsersDB.addUsers(newUser);
      navigate('/login');
    }
    catch(error){
      Swal.fire({type : 'error' , text : error.message})
    }

    setUser({...user , organizationName : ''})
    setUser({...user , mailingAddress : ''})
    setUser({...user , contactNumber : ''})
    setUser({...user , password : ''})
  }

  // console.log(user);
  return (
    <>
      <Navigation />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body className="signupDiv">
              <h2 className="text-center mb-3">
                Register as <span>Organization</span>
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Organization Name"
                    onChange={(e) => setUser({...user, organizationName : e.target.value})}
                  />
                </Form.Group>
                <Form.Group id="email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setUser({...user , mailingAddress : e.target.value})}
                  />
                </Form.Group>
                <Form.Group id="email" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Contact Number"
                    onChange={(e) => setUser({...user , contactNumber : e.target.value})}
                  />
                </Form.Group>
                <InputGroup id='password' className='mb-3'>
                  <Form.Control
                    type = {showPass==true?"text":'password'}
                    placeholder= 'Password'
                    onChange = {(e)=>setUser({...user , password : e.target.value})}
                  />
                  <InputGroup.Text
                    style={{backgroundColor : 'white'}}
                    onClick = {()=>setShowPass(!showPass)}
                  ><i className={showPass==true?"fa fa-eye":"fa fa-eye-slash"}></i></InputGroup.Text>
                </InputGroup>
                <Button className="w-100 createAcc_btn" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Signup;
