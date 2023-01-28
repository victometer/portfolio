import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
// import NavItem from "./NavItem";
import { navItems } from "./NavItems";
import { HashLink } from "react-router-hash-link";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";


const NavBar = ({ setClicked, clicked }) => {
    return (
        <div className="nav-bar">
            <HashLink smooth to="#Home" className="nav-item">Home</HashLink> <br/>
            <HashLink smooth to="#About" className="nav-item">About</HashLink> <br/>
            <HashLink smooth to="#Projects" className="nav-item">Projects</HashLink> <br/>
            <HashLink smooth to="#Contact" className="nav-item">Contact</HashLink>

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