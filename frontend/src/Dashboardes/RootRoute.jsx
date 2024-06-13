    import { useState } from 'react'
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import './App.css'
    import bgImage from './../assets/bg.png';
    
    
    import ClientService from './ClientService/ClientService'
    import bgImage from './assets/bg.png';
    import Dashboard from './Dashboard/Dashboard';
import Assessment from './Assessment/Assessment';
    

    function  RootRoute() {
      const [count, setCount] = useState(0)
    
      return (
        <div>
        <Dashboard />
        <Routes>
              <Route path="/services" bgImage={bgImage} element={<ClientService />}/>
              <Route path="/dashboard" bgImage={bgImage} element={<Dashboard />} />
              <Route path="/assessment" bgImage={bgImage} element={<Assessment />} />
              
          </Routes>
              
        </div> 
        
      )
    }
    
    export default RootRoute
    