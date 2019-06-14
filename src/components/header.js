import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Caleb Lovell</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
