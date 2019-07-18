import React from "react"
import { Link } from "gatsby"

// import { navigate } from "@reach/router"

const Header = () => {
  //   const changeView = () => {
  //     navigate("#about")
  //   }
  // onClick={() => {
  //   changeView()
  // }}

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li className="link-divider"></li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li className="link-divider"></li>
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li className="link-divider"></li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
