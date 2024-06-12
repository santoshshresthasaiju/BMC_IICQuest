import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'


import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Contact from './pages/Contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
          
    </>
  )
}

export default App
