import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { NavHashLink } from 'react-router-hash-link';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
    <Router>
        <header>
        <NavBar />
        </header>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes> */}
        <footer>
        <Footer />
        </footer>
      </Router>
  </div>
  );
}

export default App;
