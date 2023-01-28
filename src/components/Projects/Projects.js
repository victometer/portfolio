import React from "react";
import "./Projects.css"
import QuizzJS from "./images/QuizzJS.png"
import GymPython from "./images/GymPython.png"


const Projects = () => {
    return (
        <section className="projects-all">
            <h2 className="projects" id="Projects">Projects</h2>
            <div className="project-imgages">
                <img src={QuizzJS} alt="Quiz-image" width="300" height="330" className="project-img"/>
                <img src={GymPython} alt="Quiz-image" width="300" height="330" className="project-img" />
            </div>
            <h2>Tech Stack</h2>

            <div className="tech-stack">
            <h3>Programming Languages: </h3>
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="Python logo" className="logo"/> 
            

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" className="logo" />
            
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL logo" className="logo"/>
            
            

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS logo" className="logo"/>
            

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML logo" className="logo" />
            

            <h3>Tools and Frameworks:</h3>
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL logo" className="logo"/>

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" alt="Flask logo" className="logo"/>

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM logo" className="logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt="Mocha logo" className="logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React logo" className="logo" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="NodeJS logo" className="logo" />
            
        
        
        </div>
    </section>

    )
}



export default Projects



