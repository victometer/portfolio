import React from "react";
import "./About.css"
import my_photo from "./images/my_photo.png"

const About = () => {
    return (
        <section>
            <h2 className="about__heading" id="About">About Me</h2>
            <div className="aboutContainer">
            <p className="about__body">
            Hi there! I'm Victoria, a recent graduate of CodeClan and a newcomer to the tech industry. I'm excited to apply my newly acquired skills towards solving real-world problems and building innovative solutions."
                
            </p>
            <img
        className="about__headshot"
        src={my_photo}
        alt="Victoria-photo"
        width="300"
        height="350"
    />
    </div>

        </section>
    )
}


export default About 
