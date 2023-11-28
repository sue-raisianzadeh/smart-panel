import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import Gallery from './components/Gallery'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
