import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'


import LoginForm from './pages/Login/Login'
import Home from './pages/Home/Home';
import ClientService from './Dashboardes/ClientService/ClientService';
import Assessment from './Dashboardes/Assessment/Assessment';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Contact from './pages/Contact/Contact';

import Dashboard from './Dashboardes/Dashboard/Dashboard';
import Chatbox from './Chatbox/Chatbox';

function App() {

  return (
    <div>
      <Header />
      
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/services" element={<ClientService />}/>
          <Route path="/assessment"  element={<Assessment />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />}/>
          <Route path ="/blog" element={<Blog/>}/>
          <Route path='/chatbox' element={<Chatbox/>}/>
        </Routes>
      <Footer />
    </div>    

  )
}
export default App
