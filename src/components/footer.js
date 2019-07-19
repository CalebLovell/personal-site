import React from "react"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
      <Link
        to="home"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={1500}
      >
        <button className="scroll-up" title="Back to top">
          <FontAwesomeIcon icon={faAngleDoubleUp} size="lg" />
        </button>
      </Link>
      <div className="social-icons-container">
        <a
          href={`https://www.linkedin.com/in/caleblovell/`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-div"
        >
          <div className="img-container">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </div>
        </a>
        <a
          href={`https://github.com/CalebLovell`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-div"
        >
          <div className="img-container">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </div>
        </a>
        <a
          href={`https://twitter.com/Caleb__Lovell`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-div"
        >
          <div className="img-container">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </div>
        </a>
        <a
          href={`https://www.instagram.com/caleb.lovell/`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-div"
        >
          <div className="img-container">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </div>
        </a>
      </div>
      <p>
        Custom Made with Gatsby, HTML5 Canvas, React and SASS. Click{" "}
        <a
          href={`https://github.com/CalebLovell/personal-site`}
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        to view on Github.
      </p>
      <p className="copyright">Caleb Lovell &copy; 2019.</p>
    </footer>
  )
}

export default Footer
