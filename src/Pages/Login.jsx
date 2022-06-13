import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from '../Views/Footer';
import GoogleButton from "react-google-button";
import Swal from 'sweetalert2'
import { Form, Button, Card, Container, Alert, InputGroup } from "react-bootstrap";
import UsersDB from "../Services/UsersDB";


function Login() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    getUsers();
  },[])

  const getUsers = async() => {
    const data = await UsersDB.getAllUsers();
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let verify;
    if(email == '' || password == ''){
      Swal.fire({type:'error' , text : 'All fields are mandatory'})
    }
    
    users.every(obj => {
      if((obj.mailingAddress == email)&&(obj.password == password)&&(obj.status == true)){
        window.localStorage.setItem('currUser', JSON.stringify({status : obj.status}));
        alert('verified')   
        return false
      }
      window.localStorage.setItem('currUser', JSON.stringify({status : false}));
      return true
    })
    
    verify = JSON.parse(window.localStorage.getItem('currUser'))
    if(verify.status == false){
      Swal.fire({type : 'error' , text : "You don't have access try contacting the admin"})
    }else if(verify.status == true){
      navigate('/Dashboard')
    }else if(email == '' && password == ''){
      Swal.fire({type:'error' , text : 'All fields are mandatory'})
    }
    // console.log(verify);    
  }

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
                LogIn As <span>Student</span>
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
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Register</Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
    // </AuthProvider>
  );
}

export default Login;
