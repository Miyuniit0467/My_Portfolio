import React, { useState } from 'react'
import './Contact.css'


export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Email:miyunidevanga2004@gmail.com</p>
      <p>Phone: +94 741699017</p>
      <p>LinkedIn: https://www.linkedin.com/in/miyuni-dewanga</p>

      <div className="contact-form">
        <h3>Send a Message</h3>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button onClick={() => setSubmitted(true)}>Send Message</button>
        {submitted && <p className="success">✓ Message sent successfully!</p>}
      </div>
    </div>
  )
}
