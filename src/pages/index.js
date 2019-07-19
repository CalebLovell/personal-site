import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import ss from "../../static/portfolio-screenshot.png"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Caleb Lovell's Developer Portfolio</title>
        <meta property="og:url" content="https://www.caleblovell.dev" />
        <meta property="og:title" content="Caleb Lovell's Dev Portfolio" />
        <meta property="og:description" content="Hello! I'm Caleb Lovell. I'm a full-stack web developer." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ss} />
        <meta property="og:image:alt" content="Home View of Portfolio" />
      </Helmet>
      <Layout />
    </>
  )
}

export default IndexPage
