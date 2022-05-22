import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from '../Views/Footer';
import GoogleButton from "react-google-button";
import { Form, Button, Card, Container, Alert, InputGroup } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPass, setShowPass] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn , googleSignIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/Dashboard");
    } catch (err) {
      setError(err.message);
    }
  };


  const handleGoogleSignIn = async(e) => {
    e.preventDefault();
    try{
      await googleSignIn();
      navigate('/Dashboard');
    }catch(err){
      setError(err.message)
    }
  }

  console.log(password);
  return (
    // <AuthProvider>
    <>
      <Navigation />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card className="loginDiv">
            <Card.Body>
              <h2 className="text-center mb-3">
                Log<span>In</span>
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
                    type={showPass==true?'text':'password'}
                    placeholder='Password'
                    onChange = {(e)=>setPassword(e.target.value)}
                  />
                  <InputGroup.Text
                    style={{backgroundColor:'white'}}
                    onClick={()=>setShowPass(!showPass)}
                  >
                    <i className={showPass==true?'fa fa-eye':'fa fa-eye-slash'}></i>
                  </InputGroup.Text>
                </InputGroup>
                {/* <Form.Group id="password" className="mb-3">
                <Form.Control 
                  type="password" 
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Form.Group> */}
                <Button className="w-100 login_btn" type="submit">
                  Login
                </Button>
                <hr />
                <div className="d-grid gap-2">
                  <GoogleButton onClick={handleGoogleSignIn} />
                </div>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
    // </AuthProvider>
  );
}

export default Login;
