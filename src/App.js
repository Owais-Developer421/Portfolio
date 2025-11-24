import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import { useState } from 'react';
import Getform from './components/Getform';
import Experience from './components/Experience';
import ParticlesBackground from "./components/ParticlesBackground";
function App() {

  const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
  
  const handleMenuClick = (e) => {
    if (e.target.tagName === "A") {
      setIsOpen(false);
    }
  };

  return (
        <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
   <nav>
        <div className='logo'>OWAIS</div>
        <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>☰</div>

        <ul className={isOpen ? "navbar-links open" : "navbar-links"} onClick={handleMenuClick}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#project">Project</a>
          <a href="#service">Service</a>
          <a href="#testimonial">Testimonial</a>
          <button className='btn nav-button'>Get Started</button>
        </ul>
      </nav>

      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="project"><Project /></div>
      <div id="service"><Service /></div>
      <div id="testimonial"><Testimonial /></div>
      <Getform></Getform>
       </>
   }
    />

        {/* 👇 yeh new page route */}
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}
export default App;
