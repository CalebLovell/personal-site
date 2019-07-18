import React from "react"
import Bars from "./bars"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"

import profPic from "../../static/prof-pic.jpg"
import resume from "../../static/resume.pdf"

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="title">About Me</h1>
      <div className="flex-container">
        <div className="about-container">
          <div className="profile-pic-container">
            <div className="pic-wrapper">
              <img src={profPic} alt="my face" />
            </div>
          </div>
          <h2 className="profile-subtitle">
            Who is this guy? &nbsp;
            <a href={`${resume}`} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFileDownload} title="Open Resume" />
            </a>
          </h2>
          <div className="profile-description">
            <p>
              I'm a full-stack <span>web developer</span> with a particular
              passion for making interactive front-end projects and data
              visualizations. I am a voracious learner and love to teach myself
              new things. In my free time you can find me reading, discussing
              politics or enjoying the ourdoors!
            </p>
          </div>
        </div>
        <Bars />
      </div>
    </section>
  )
}

export default About
