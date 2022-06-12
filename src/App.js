import React from 'react';
import {BrowserRouter as Router, Routes, Route,HashRouter} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Home from './Pages/Home';
import Admin from './Pages/Login As Admin/Admin';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Company from './Pages/Company';
import Contact from './Pages/Contact';
import Agreement from './Pages/Agreement';
// protected routes
import Dashboard from './Pages/Dashboard';
import TutionRequest from './Pages/Request tutions/TutionRequest';
import DownloadBooks from './Pages/Download Books/DownloadBooks';
import Lectures from './Pages/Youtube videos/Lectures';
// private routes
import AdminPanel from './Pages/Admin Panel/AdminPanel';
// importing Protected Routes
import ProtectedRoute from './Routes/ProtectedRoute';
// importing private route
import PrivateRoute from './Routes/PrivateRoute';

import {UserAuthContextProvider} from './Context/UserAuthContext';

import './App.css';


function App() {
  return (
    <UserAuthContextProvider>
      {/* <Router basename='/EduDoor'> */}
      <Router basename='/'>
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Company' element={<Company />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Agreement' element={<Agreement />} />

            <Route
              path='/AdminPanel'
              element={
                <PrivateRoute>
                  <AdminPanel />
                </PrivateRoute>
              }
            />
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
