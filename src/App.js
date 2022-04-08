import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
// importing Protected Routes
import ProtectedRoute from './Routes/ProtectedRoute';

import {UserAuthContextProvider} from './Context/UserAuthContext';


function App() {
  return (
    <UserAuthContextProvider>
          <Routes>
            <Route 
                  path='/Dashboard'
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
            />
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
