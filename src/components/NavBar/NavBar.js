import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
// import NavItem from "./NavItem";
import { navItems } from "./NavItems";
import { NavHashLink } from "react-router-hash-link";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";


const NavBar = ({ setClicked, clicked }) => {
    return (
        <div className="nav-bar">
            <NavHashLink to="/" className="nav-item">Home</NavHashLink> <br/>
            <NavHashLink to="/about" className="nav-item">About</NavHashLink> <br/>
            <NavHashLink to="/projects" className="nav-item">Projects</NavHashLink> <br/>
            <NavHashLink to="/contact" className="nav-item">Contact</NavHashLink>

        </div>


    );
}


//     <nav className={`NavBar ${clicked ? "active" : ""}`}>
//     {navItems.map((item) => (
//         <NavItems
//             setClicked={setClicked}
//             clicked={clicked}
//             name={item.name}
//             link={item.link}
//         />
//     ))}
// </nav>




export default NavBar