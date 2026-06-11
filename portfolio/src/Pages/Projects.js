import React from 'react'
import './Projects.css'

function ProjectCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p><strong>Technologies:</strong> {props.tech}</p>
      <a href={props.github} target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Distribution Management System"
          description="Distribution Management System built with Java and Mysql."
          tech="Java, MySQL"
          github="https://github.com/Miyuniit0467/DMS-backend"
        />
        <ProjectCard
          title="Portfolio Website"
          description="Personal portfolio built with React.js."
          tech="React.js, CSS"
          github="https://github.com/Miyuniit0467/Protfolio"
        />
        <ProjectCard
          title="AI-Chatbot"
          description="A simple chatbot built with HTML,CSS and JavaScript."
          tech="HTML, CSS, JavaScript"
          github="https://github.com/Miyuniit0467/my-ai-chatbot"
        />
      </div>
    </div>

  )
}
