import React from "react"

const Home = () => {
  return (
    <section className="home">
      <div className="canvas-container">
        <canvas />
      </div>
      <div className="intro-container">
        <h1>Hello, I'm Caleb Lovell. I'm a full-stack web developer.</h1>
        <button>View my projects</button>
      </div>
    </section>
  )
}

export default Home
