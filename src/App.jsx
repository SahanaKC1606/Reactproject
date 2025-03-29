import './App.css';
import './global.css';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Nav from './Components/Nav';
import Userlist from './Components/Userlist';
import Edituser from './Components/Edituser';
import Login from './Components/Login';

const App = () => {
  return (
    <div>
      <Router>
      <ToastContainer></ToastContainer>
      <Nav></Nav>
        <Routes>
          
        <Route path="/" element={<Login />} />
          <Route path='/userlist' element={<Userlist></Userlist>}></Route>
         
          <Route path='/edituser/:id' element={<Edituser/>}/>
          <Route path='/login' element={<Login></Login>}/>
        </Routes>
      </Router>
      
    </div>
  )
}


export default App;
