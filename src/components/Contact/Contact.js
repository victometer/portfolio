import React from "react";
import "./Contact.css"
import {FaLinkedin, FaMailBulk} from "react-icons/fa";

const Contact = () => {
    return (
        <section>
            <h2 className="contact" id="Contact">Contact</h2>
            <div className="contact__option">
                <FaMailBulk className="contact__logo" size={45} />
                <a href="mailto: vicki_ng92@yahoo.com">
                    <span className="contact__text">victoria.dorosenco@gmail.com</span>
                </a>
            </div>
            <div className="contact__option">
                <FaLinkedin className="contact__logo" size={45} />
                <a
                    href="www.linkedin.com/in/victoria-dorosenco"
                    aria-label="my Linkedin"
                >
                    <span className="contact__text">Victoria-Dorosenco</span>
                </a>
            </div>
        </section>
    )
}


export default Contact