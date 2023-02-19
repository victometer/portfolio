import React from "react";
import "./Projects.css"
import QuizzJS from "./images/QuizzJS.png"
import GymPython from "./images/GymPython.png"
import WorldJS from "./images/WorldJS.png"


const Projects = () => {
    return (
        <section className="projects-all">
            <h2 className="projects" id="Projects">Projects</h2>
            <div className="project-imgages">
                <div className="grid-item">
                    <img src={QuizzJS} alt="Quiz-image" width="300" height="330" className="project-img" />
                    <a className="gitHubLink"
                        href="https://github.com/victometer/Week7_Weekend_Quiz_Project">GitHub Link</a>
                </div>
                <div className="grid-item">
                    <img src={GymPython} alt="Gym-image" width="300" height="330" className="project-img" />
                    <a className="gitHubLink"
                        href="https://github.com/victometer/Final_Project">GitHub Link</a>
                </div>
                <div className="grid-item">
                    <img src={WorldJS} alt="World-image" width="300" height="330" className="project-img" />
                    <a className="gitHubLink"
                        href="https://github.com/victometer/Javascript-Project">GitHub Link</a>
                </div>
            </div>
            <h2>Tech Stack</h2>

            <div className="tech-stack">
                <h3>Programming Languages: </h3>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="Python logo" className="logo" />


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" className="logo" />


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                    alt="Java logo" className="logo" />



                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS logo" className="logo" />


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML logo" className="logo" />


                <h3>Databases:</h3>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL logo" className="logo" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB logo" className="logo" />


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="Firebase logo" className="logo" />



                <h3>Tools and Frameworks:</h3>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" alt="Flask logo" className="logo" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM logo" className="logo" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt="Mocha logo" className="logo" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React logo" className="logo" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="NodeJS logo" className="logo" />



            </div>
        </section>

    )
}



export default Projects



