import React from "react"

const Bars = () => {
  return (
    <div className="bars-container">
      <h2 className="bars-subtitle">Dev Skills</h2>
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
        <div className="skill-bar gatsby">
          <div className="skill-title">Gatsby</div>
        </div>
        <span>50%</span>
      </div>
      <div className="skill-container">
        <div className="skill-bar postgresql">
          <div className="skill-title">PostgreSQL</div>
        </div>
        <span>70%</span>
      </div>
      <div className="skill-container">
        <div className="skill-bar node">
          <div className="skill-title">Node.js</div>
        </div>
        <span>50%</span>
      </div>
      <h2 className="bars-subtitle">Languages</h2>
      <div className="skill-container">
        <div className="skill-bar spanish">
          <div className="skill-title">Spanish</div>
        </div>
        <span>80%</span>
      </div>
      <div className="skill-container">
        <div className="skill-bar portuguese">
          <div className="skill-title">Portuguese</div>
        </div>
        <span>90%</span>
      </div>
      <div className="skill-container last">
        <div className="skill-bar italian">
          <div className="skill-title">Italian</div>
        </div>
        <span>60%</span>
      </div>
    </div>
  )
}

export default Bars
