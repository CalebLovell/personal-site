import React from "react"
import Bars from "./bars"

const About = () => {
  return (
    <section className="about">
      <h1 className="title">About Me</h1>
      <div className="flex-container">
        <div className="about-container">
          <div className="profile-pic-container">
            <div className="pic-wrapper">
              <img src="prof-pic.jpg" alt="my beautiful face" />
            </div>
          </div>
          <h2 className="profile-subtitle">Who is this guy?</h2>
          <div className="profile-description">
            <p>
              I'm a full-stack <span>web developer</span> with a particular passion for
              making interactive front-end projects and data visualizations. I
              am a voracious learner and love to teach myself new things. In my free time you can find me reading, discussing politics or enjoying the beautiful Utah ourdoors!
            </p>
          </div>
        </div>
        <Bars />
      </div>
    </section>
  )
}

export default About
