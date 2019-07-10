import React from "react"
import { Link } from "gatsby"

// import { navigate } from "@reach/router"

const Header = () => {
  //   const changeView = () => {
  //     navigate("#about")
  //   }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="#home" activeStyle={{ color: "red" }}>
              Home
            </Link>
          </li>
          <li
          // onClick={() => {
          //   changeView()
          // }}
          >
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
