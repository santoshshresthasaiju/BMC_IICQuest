import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import ClientService from './Dashboardes/ClientService/ClientService';
import Assessment from './Dashboardes/Assessment/Assessment';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import bgImage from './assets/bg.png';
import Contact from './pages/Contact/Contact';
import LoginForm from './pages/Login/Login';
import Dashboard from './Dashboardes/Dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0)

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
        </Routes>
      <Footer />
    </div>    

  )
}
export default App
