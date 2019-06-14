import React from "react"

import Footer from "./footer"
import "../styles/styles.scss"

const Layout = props => {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
