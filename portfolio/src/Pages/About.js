import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>

      <div className="section">
        <h3>Education</h3>
        <p>National Diploma in Technology – Institute of Technology, University of Moratuwa</p>
      </div>

      <div className="section">
        <h3>Technical Skills</h3>
        <ul>
          <li>React.js</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Java</li>
        </ul>
      </div>

      <div className="section">
        <h3>Career Aspirations</h3>
        <p>I aim to become a full-stack developer and work on impactful software projects.</p>
      </div>
    </div>
  )
}



