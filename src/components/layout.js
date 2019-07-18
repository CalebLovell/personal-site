import React from "react"

import Header from "./header"
import Home from "./home"
import About from "./about"
import Portfolio from "./projects"
import Contact from "./contact"
import Footer from "./footer"

import "../styles/styles.scss"

const Layout = props => {
  return (
    <main>
      <Home />
      {/* <Header /> */}
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

export default Layout
