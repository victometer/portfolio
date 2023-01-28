import React from "react";
import "./NavBar.css"
import { HashLink } from "react-router-hash-link";


const NavBar = () => {
    return (
        <div className="nav-bar">
            <HashLink smooth to="#Home" className="nav-item">Home</HashLink> <br/>
            <HashLink smooth to="#About" className="nav-item">About</HashLink> <br/>
            <HashLink smooth to="#Projects" className="nav-item">Projects</HashLink> <br/>
            <HashLink smooth to="#Contact" className="nav-item">Contact</HashLink>

        </div>


    );
}




export default NavBar