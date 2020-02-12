import React from "react"

const Bars = () => {
  return (
    <div className="bars-container">
      <div className="bars-div">
        <h2 className="bars-subtitle">Dev Skills</h2>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">HTML</div>
            <div className="skill-exp">
              <div className="skill-fill html" />
            </div>
          </div>
          <span>100%</span>
        </div>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">CSS</div>
            <div className="skill-exp">
              <div className="skill-fill css" />
            </div>
          </div>
          <span>90%</span>
        </div>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">JavaScript</div>
            <div className="skill-exp">
              <div className="skill-fill javascript" />
            </div>
          </div>
          <span>85%</span>
        </div>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">React</div>
            <div className="skill-exp">
              <div className="skill-fill react" />
            </div>
          </div>
          <span>80%</span>
        </div>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">React Native</div>
            <div className="skill-exp">
              <div className="skill-fill react-native" />
            </div>
          </div>
          <span>70%</span>
        </div>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">Firebase</div>
            <div className="skill-exp">
              <div className="skill-fill firebase" />
            </div>
          </div>
          <span>70%</span>
        </div>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">PostgreSQL</div>
            <div className="skill-exp">
              <div className="skill-fill postgresql" />
            </div>
          </div>
          <span>80%</span>
        </div>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">Node.js</div>
            <div className="skill-exp">
              <div className="skill-fill node" />
            </div>
          </div>
          <span>75%</span>
        </div>
      </div>
      <div className="bars-div">
        <h2 className="bars-subtitle">Languages</h2>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">Spanish</div>
            <div className="skill-exp">
              <div className="skill-fill spanish" />
            </div>
          </div>
          <span>80%</span>
        </div>
        <div className="skill-container">
          <div className="skill-bar">
            <div className="skill-title">Portuguese</div>
            <div className="skill-exp">
              <div className="skill-fill portuguese" />
            </div>
          </div>
          <span>90%</span>
        </div>
        <div className="skill-container last">
          <div className="skill-bar">
            <div className="skill-title">Italian</div>
            <div className="skill-exp">
              <div className="skill-fill italian" />
            </div>
          </div>
          <span>60%</span>
        </div>
      </div>
    </div>
  )
}

export default Bars
