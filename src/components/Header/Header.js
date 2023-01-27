import React from "react";
import { useState } from "react";
import "./Header.css"
import NavBar from "../NavBar/NavBar";

const Header = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <header className="header">
            <NavBar setClicked={setClicked} clicked={clicked} />
        </header>
    );
}

export default Header