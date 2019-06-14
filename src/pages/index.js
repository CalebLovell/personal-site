import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"


const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Home />
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
    </Layout>
  )
}

export default IndexPage
