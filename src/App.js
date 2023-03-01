import React,{useState,useEffect} from 'react'
import './App.css';

import Navbar from './Components/Layout/Navbar';
import SideBar from './Components/Layout/SideBar';
import Dashboard from './Components/Dashboard';
import AdminLogin from './Components/AdminLogin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Protected from './Components/Protected';
import Campaign from './Components/Layout/Campaign';
function App() {
const location=useLocation();

  return (
    <div>
      {console.log(location)}
      {location.pathname !== '/login' ? <Navbar /> : ""}
      {location.pathname !== '/login' ? <SideBar /> : ""}
      <div className='pl-[265px]  mr-12'>
        <Routes>
          <Route path='/login' element={<AdminLogin />}></Route>
          <Route path='/' element={<Protected Component={Dashboard}/>}></Route>
          <Route path='/campaign' element={<Protected Component={Campaign}/>}></Route>
          <Route path='/*' element={<Protected Component={AdminLogin}/>}></Route>
        </Routes>    
        </div>
    </div>
  )
}

export default App;
