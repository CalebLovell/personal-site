import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import sitePreview from "../../static/portfolio-screenshot.png"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Caleb Lovell's Developer Portfolio</title>
        <meta
          property="og:title"
          content="Caleb Lovell's Developer Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.caleblovell.dev/" />
        <meta property="og:image" content="sitePreview" />
        <meta
          property="og:description"
          description="Hello! I'm Caleb Lovell. I'm a full-stack web developer."
        />
      </Helmet>
      <Layout />
    </>
  )
}

export default IndexPage
