import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"
import usacountyexplorerHome from "../../static/project-screenshots/usacountyexplorer.com.png"
import usacountyexplorerFavs from "../../static/project-screenshots/usacountyexplorer-favorites-view.png"

import lyricslogHome from "../../static/project-screenshots/lyricslog-home-view.png"
import lyricslogSong from "../../static/project-screenshots/lyricslog-song-view.png"
import lyricslogLogin from "../../static/project-screenshots/lyricslog-login-view.png"
import lyricslogProfile from "../../static/project-screenshots/lyricslog-profile-view.png"
import lyricslogAdd from "../../static/project-screenshots/lyricslog-add-view.png"

const usaCountyExplorerImages = [usacountyexplorerHome, usacountyexplorerFavs]
const lyricsLogImages = [
  lyricslogHome,
  lyricslogSong,
  lyricslogLogin,
  lyricslogProfile,
  lyricslogAdd,
]

const Portfolio = () => {
  const [show, setShow] = useState(`none`)
  const [carousel, setCarousel] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [title, setTitle] = useState(``)
  const [description, setDescription] = useState(``)
  const [link, setLink] = useState(``)
  const [projectActiveClass1, setProjectActiveClass1] = useState(``)
  const [projectActiveClass2, setProjectActiveClass2] = useState(``)

  const increaseImageIndex = () => {
    if (currentImageIndex === carousel.length - 1) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }
  const decreaseImageIndex = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(carousel.length - 1)
    } else {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  return (
    <section className="portfolio" id="#portfolio">
      <h1 className="title">Projects</h1>
      <div
        className="modal-container"
        style={{
          display: `${show}`,
        }}
      >
        <div className="modal">
          <div className="slider-container">
            <img src={carousel[currentImageIndex]} alt="project-preview" />
            <button
              className="backward"
              onClick={() => {
                decreaseImageIndex()
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className="forward"
              onClick={() => {
                increaseImageIndex()
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="slider-description">
            <div>
              <h3>{title}</h3>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <div className="slider-description-bottom">
              <button>
                <a href={`${link}`} target="_blank" rel="noopener noreferrer">
                  View Live Site
                </a>
              </button>
              <FontAwesomeIcon icon={faTimes} onClick={() => setShow(`none`)} />
            </div>
          </div>
        </div>
      </div>
      <div className="cards-flex-wrapper">
        <div
          className="card-container"
          onMouseEnter={() => setProjectActiveClass1(`project-active1`)}
          onMouseLeave={() => setProjectActiveClass1(``)}
        >
          <div className={`card ${projectActiveClass1}`}>
            <img
              src={usacountyexplorerHome}
              alt="USA County Explorer Home Page"
            ></img>
            <div>
              <h1>USA County Explorer</h1>
              <h2>D3.js, JavaScript, React, SASS, Node.js, PostgreSQL</h2>
            </div>
            <button
              onClick={() => {
                setCurrentImageIndex(0)
                setCarousel(usaCountyExplorerImages)
                setTitle(`USA County Explorer`)
                setDescription(`Site for people to explore US counties and visualize where they
            might enjoy living. Counties can be clicked to display
            information, and the sliders can be adjusted or toggled to
            re-shade the map according to the user's desires. Dark counties
            most closely represent the user's interests, and light counties
            least represent them.`)
                setLink(`https://usacountyexplorer.com/`)
                setShow(`flex`)
              }}
            >
              View More
            </button>
          </div>
        </div>
        <div
          className="card-container"
          onMouseEnter={() => setProjectActiveClass2(`project-active2`)}
          onMouseLeave={() => setProjectActiveClass2(``)}
        >
          <div className={`card ${projectActiveClass2}`}>
            <img src={lyricslogHome} alt="LyricsLog Home Page"></img>
            <div>
              <h1>LyricsLog</h1>
              <h2>JavaScript, React, SASS, Node.js, PostgreSQL</h2>
            </div>
            <button
              onClick={() => {
                setCurrentImageIndex(0)
                setCarousel(lyricsLogImages)
                setTitle(`Lyrics Log`)
                setDescription(
                  `Site for creating and viewing user submitted translations for song lyrics with the option to add explanations for each line. Users can create their own songs and translations or simply view those submitted by others. The song view allows users to scroll over each line from a song's lyrics to highlight the original lyrics, translated lyrics and a box containing any explanations.`
                )
                setLink(`https://lyricslog.dev/`)
                setShow(`flex`)
              }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
