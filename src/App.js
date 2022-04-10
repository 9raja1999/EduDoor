import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
// importing Protected Routes
import ProtectedRoute from './Routes/ProtectedRoute';

import {UserAuthContextProvider} from './Context/UserAuthContext';

import './App.css';


function App() {
  return (
    <UserAuthContextProvider>
      <Router>
          <Routes >
            <Route path='/EduDoor' exact element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route 
                  path='/Dashboard'
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
            />
          </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
