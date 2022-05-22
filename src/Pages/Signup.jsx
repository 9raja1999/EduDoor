import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Alert, InputGroup } from "react-bootstrap";
import Navigation from '../Components/Navigation';
import Footer from '../Views/Footer';
import Swal from 'sweetalert2'
import { useUserAuth } from "../Context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);


  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if(password === confirm){
      try {
        await signUp(email, password);
        navigate("/login");
      } catch (err) {
        setError(err.message);
      }
    }
    else{
      Swal.fire({type:'error',text:"Your password does'nt match"});
    }
  };

  return (
    // <AuthProvider>
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
                Register as <span>Student</span>
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <InputGroup id='password' className='mb-3'>
                  <Form.Control
                    type = {showPass==true?"text":'password'}
                    placeholder= 'Password'
                    onChange = {(e)=>setPassword(e.target.value)}
                  />
                  <InputGroup.Text
                    style={{backgroundColor : 'white'}}
                    onClick = {()=>setShowPass(!showPass)}
                  ><i className={showPass==true?"fa fa-eye":"fa fa-eye-slash"}></i></InputGroup.Text>
                </InputGroup>
                <InputGroup id='password-confirm' className='mb-3'>
                  <Form.Control
                    type = {showConfirm==true?"text":'password'}
                    placeholder= 'Confirm Password'
                    onChange = {(e)=>setConfirm(e.target.value)}
                  />
                  <InputGroup.Text
                    style={{backgroundColor : 'white'}}
                    onClick = {()=>setShowConfirm(!showConfirm)}
                  ><i className={showConfirm==true?"fa fa-eye":"fa fa-eye-slash"}></i></InputGroup.Text>
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
    // </AuthProvider>
  );
}

export default Signup;
