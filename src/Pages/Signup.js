import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import Navigation from '../Components/Navigation';
import { useUserAuth } from "../Context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
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
          <Card.Body>
            <h2 className="text-center mb-3">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group id="password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group id="password-confirm" className="mb-3">
                <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>
              <Button className="w-100" type="submit">
                Create Account
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </Container>
    </>
    // </AuthProvider>
  );
}

export default Signup;
