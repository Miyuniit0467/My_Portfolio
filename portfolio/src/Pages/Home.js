import React from 'react'
import './Home.css'


export default function Home() {
  return (
    <div className="home">
        <div className="home-left">
            <p className="greeting">Hi,</p>
        <h1>I'm <span className="highlight">K H M Devanga</span></h1>
        <h2>a Software Developer</h2>
        <p className="description">
          I am a Information Technology student at the Institute of 
          Technology, University of Moratuwa. I love building creative and 
          user-friendly web applications.
        </p>
        <div className="buttons">
          <a href="/contact" className="btn-primary">Hire Me</a>
          <a href="/about" className="btn-secondary">Experience</a>
        </div>
      </div>

      <div className="home-right">
        <img src="/photo.jpg" alt="Profile photo" className="profile-img" />
      </div>
    </div>
)
}

