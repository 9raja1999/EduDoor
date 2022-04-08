import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  return (
    // <AuthProvider>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-3">LogIn</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className="mb-3">
                <Form.Control
                  type="email" 
                  placeholder="Email address"
                  onChange={(e)=>setEmail(e.target.value)}  
                />
              </Form.Group>
              <Form.Group id="password" className="mb-3">
                <Form.Control 
                  type="password" 
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Form.Group>
              <Button className="w-100" type="submit">
                Login
              </Button>
              <hr />
              <div className="d-grid gap-2">
                <GoogleButton onClick={handleGoogleSignIn}/>
              </div>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Container>
    // </AuthProvider>
  );
}

export default Login;
