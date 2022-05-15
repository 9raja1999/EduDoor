import React from 'react';
import {BrowserRouter as Router, Routes, Route,HashRouter} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Company from './Pages/Company';
import Contact from './Pages/Contact';
// protected routes
import Dashboard from './Pages/Dashboard';
import TutionRequest from './Pages/TutionRequest';
import DownloadBooks from './Pages/DownloadBooks';
import Lectures from './Pages/Lectures';
// importing Protected Routes
import ProtectedRoute from './Routes/ProtectedRoute';

import {UserAuthContextProvider} from './Context/UserAuthContext';

import './App.css';


function App() {
  return (
    <UserAuthContextProvider>
      <Router basename='/EduDoor'>
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Company' element={<Company />} />
            <Route path='/Contact' element={<Contact />} />
            <Route 
                  path='/Dashboard'
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
            />
            <Route
                  path='/Tution'
                  element={
                    <ProtectedRoute>
                      <TutionRequest />
                    </ProtectedRoute>
                  }
            />
            <Route
                  path='/DownloadBooks'
                  element={
                    <ProtectedRoute>
                      <DownloadBooks />
                    </ProtectedRoute>
                  }
            />
            <Route
                  path='/Lectures'
                  element={
                    <ProtectedRoute>
                      <Lectures />
                    </ProtectedRoute>
                  }
            />


          </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
