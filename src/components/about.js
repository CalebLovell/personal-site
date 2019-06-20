import React from "react"

const About = () => {
  return (
    <section className="about">
      <div className="about-grid-container">
        <div className="profile-pic-grid-item">
          <div className="pic-wrapper">
            <img src="prof-pic.jpg" alt="my beautiful face" />
          </div>
        </div>
        <div className="bars-grid-item">
          <div className="skill-container">
            <div className="skill-bar html">
              <div className="skill-title">HTML</div>
            </div>
            <span>80%</span>
          </div>
          <div className="skill-container">
            <div className="skill-bar css">
              <div className="skill-title">CSS</div>
            </div>
            <span>90%</span>
          </div>
          <div className="skill-container">
            <div className="skill-bar javascript">
              <div className="skill-title">JavaScript</div>
            </div>
            <span>80%</span>
          </div>
          <div className="skill-container">
            <div className="skill-bar react">
              <div className="skill-title">React</div>
            </div>
            <span>70%</span>
          </div>
          <div className="skill-container">
            <div className="skill-bar d3">
              <div className="skill-title">D3.js</div>
            </div>
            <span>60%</span>
          </div>
          <div className="skill-container">
            <div className="skill-bar node">
              <div className="skill-title">Node.js</div>
            </div>
            <span>50%</span>
          </div>
          <div className="skill-container">
            <div className="skill-bar postgresql">
              <div className="skill-title">PostgreSQL</div>
            </div>
            <span>70%</span>
          </div>
        </div>
        <div className="profile-description-grid-item">
          <h2>Who Am I!?</h2>
          <p>
            I'm a full-stack web developer with a particular passion for making
            interactive front-end projects and data visualizations. I am a
            voracious learner and love to teach myself new technologies.
          </p>
          <p>
            My philosophy for development as well as life is to come up with an
            idea first and then figure out how to make it happen regardless of
            the difficulty afterwards.
          </p>
          <p>
            In my free time I like to learn languages, read and discuss
            politics, and spent time hiking or roller blading in the beautiful
            Utah outdoors.
          </p>
        </div>
        <div className="technologies-grid-item">
          <img src="devicons/html5.svg" alt="html5" className="devicon"></img>
          <img src="devicons/css3.svg" alt="css3" className="devicon"></img>
          <img
            src="devicons/javascript.svg"
            alt="javascript"
            className="devicon"
          ></img>
          <img src="devicons/react.svg" alt="react" className="devicon"></img>
          <img src="devicons/gatsby.svg" alt="gatsby" className="devicon"></img>
          <img src="devicons/sass.svg" alt="sass" className="devicon"></img>
          <img src="devicons/d3.svg" alt="d3" className="devicon"></img>
          <img src="devicons/redux.svg" alt="redux" className="devicon"></img>
          <img src="devicons/git.svg" alt="git" className="devicon"></img>
          <img
            src="devicons/express.svg"
            alt="express"
            className="devicon"
          ></img>
          <img src="devicons/nodejs.svg" alt="nodejs" className="devicon"></img>
          <img
            src="devicons/postgresql.svg"
            alt="postgresql"
            className="devicon"
          ></img>
        </div>
      </div>
    </section>
  )
}

export default About
