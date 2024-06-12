import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'


import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import About from './components/About/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
      </Routes>
      <About/>
      <Routes>
          <Route path="/" element={<About />}/>
      </Routes>
    </>
  )
}

export default App
