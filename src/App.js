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
        <header >
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
          </link>
        <NavBar />›
        </header>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <footer>
        <Footer />
        </footer>
      </Router>
  </div>
  );
}

export default App;
