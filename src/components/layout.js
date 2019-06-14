import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"

const Layout = props => {
  return (
    <div>
      {props.children}
      <Header />
      <Footer />
    </div>
  )
}

export default Layout
