import React from "react"
import project1 from "../../static/project-screenshots/usacountyexplorer.com.png"
import project2 from "../../static/project-screenshots/lyricslog-home-view.png"

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h1>Projects</h1>
      <div className="card">
        <img src={project1}></img>
      </div>
      <div className="card">
        <img src={project2}></img>
      </div>
    </section>
  )
}

export default Portfolio
