import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import project1 from "../../static/project-screenshots/usacountyexplorer.com.png"
import project2 from "../../static/project-screenshots/lyricslog-home-view.png"

const Portfolio = () => {
  const [show, setShow] = useState(`none`)

  return (
    <section className="portfolio">
      <div
        className="modal-container"
        style={{
          display: `${show}`,
        }}
      >
        <div className="modal">
          <div className="slider-container"></div>
          <div className="slider-description">
            <div>
              <h3>USA County Explorer</h3>
            </div>
            <div>
              <p>
                Site for people to explore US counties and visualize where they
                might enjoy living. Counties can be clicked to display
                information, and the sliders can be adjusted or toggled to
                re-shade the map according to the user's desires. Dark counties
                most closely represent the user's interests, and light counties
                least represent them.
              </p>
            </div>
            <div className="slider-description-bottom">
              <button>
                <a href="https://usacountyexplorer.com/">View Live Site</a>
              </button>
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={() => setShow(`none`)}
              />
            </div>
          </div>
        </div>
      </div>
      <h1>Projects</h1>
      <div className="card-container">
        <div className="card">
          <img src={project1} alt=""></img>
        </div>
        <button onClick={() => setShow(`flex`)}>View More</button>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={project2} alt=""></img>
        </div>
        <button>View More</button>
      </div>
    </section>
  )
}

export default Portfolio
