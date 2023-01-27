import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { navItems } from "./NavItems";


const NavBar = ({ setClicked, clicked }) => {
    return (
        <nav className={`NavBar ${clicked ? "active" : ""}`}>
            {navItems.map((item) => (
                <NavItem
                    setClicked={setClicked}
                    clicked={clicked}
                    name={item.name}
                    link={item.link}
                />
            ))}
        </nav>
    );
    }


        // return (
        //     <div>
        //         <ul>
        //             <li>
        //                 <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/about">About</Link>
        //             </li>
        //             <li>
        //                 <Link to="/projects">Projects</Link>
        //             </li>
        //             <li>
        //                 <Link to="/contact">Contact</Link>
        //             </li>

        //         </ul>
        //     </div>
        // )
    




    export default NavBar