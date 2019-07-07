import React from "react"
import Title from "../components/title"
import Bars from "../components/bars"

const About = () => {
  return (
    <section className="about">
      <Title title={`ABOUT`} />
      <div className="about-container">
        <div className="profile-container">
          <div className="profile-pic-container">
            <div className="pic-wrapper">
              <img src="prof-pic.jpg" alt="my beautiful face" />
            </div>
          </div>
          <div className="profile-description">
            <h2>Who Am I!?</h2>
            <p>
              I'm a full-stack web developer with a particular passion for
              making interactive front-end projects and data visualizations. I
              am a voracious learner and love to teach myself new technologies.
            </p>
            <p>
              In my free time I like to learn languages, read and discuss
              politics, and spent time hiking or roller blading in the beautiful
              Utah outdoors.
            </p>
          </div>
        </div>
        <div className="technologies">
          <div className="tech-item">
            <img src="devicons/html5.svg" alt="html5" className="devicon"></img>
            <p>HTML</p>
          </div>
          <div className="tech-item">
            <img src="devicons/css3.svg" alt="css3" className="devicon"></img>
            <p>CSS</p>
          </div>
          <div className="tech-item">
            <img src="devicons/react.svg" alt="react" className="devicon"></img>
            <p>React</p>
          </div>
          <div className="tech-item">
            <img
              src="devicons/javascript.svg"
              alt="javascript"
              className="devicon"
            ></img>
            <p>JavaScript</p>
          </div>
          <div className="tech-item">
            <img
              src="devicons/gatsby.svg"
              alt="gatsby"
              className="devicon"
            ></img>
            <p>Gatsby</p>
          </div>
          <div className="tech-item">
            <img src="devicons/sass.svg" alt="sass" className="devicon"></img>
            <p>SASS</p>
          </div>
          <div className="tech-item">
            <img src="devicons/d3.svg" alt="d3" className="devicon"></img>
            <p>D3</p>
          </div>
          <div className="tech-item">
            <img src="devicons/redux.svg" alt="redux" className="devicon"></img>
            <p>Redux</p>
          </div>
          <div className="tech-item">
            <img src="devicons/git.svg" alt="git" className="devicon"></img>
            <p>Git</p>
          </div>
          <div className="tech-item">
            <img
              src="devicons/express.svg"
              alt="express"
              className="devicon"
            ></img>
            <p>Express</p>
          </div>
          <div className="tech-item">
            <img
              src="devicons/nodejs.svg"
              alt="nodejs"
              className="devicon"
            ></img>
            <p>Node</p>
          </div>
          <div className="tech-item">
            <img
              src="devicons/postgresql.svg"
              alt="postgresql"
              className="devicon"
            ></img>
            <p>PostgreSQL</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
