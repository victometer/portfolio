import React from "react";
import "./About.css"
import my_photo from "./images/my_photo.jpg"

const About = () => {
    return (
        <section>
            <h2 className="about__heading" id="About">About Me</h2>
            <p className="about__body">
                Hello! My name is Victoria and I am a software noob. I'm about to graduate from CodeClan and am very eager to put mu newly learnt skills to real life use.
                
            </p>
            <img
        className="about__headshot"
        src={my_photo}
        alt="Victoria-photo"
        width="250"
        height="300"
    />

        </section>
    )
}


export default About 
