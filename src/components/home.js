import React, { Component, createRef } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

// Vars for editing circle properties
const colors = [
  `rgba(255,255,255,`,
  `rgba(255,255,255,`,
  `rgba(255,255,255,`,
  `rgba(255,255,255,`,
  `rgba(246,238,166,`,
  `rgba(245,132,26,`,
  `rgba(197,60,4,`,
  `rgba(216,2,5,`,
  `rgba(53,79,216,`,
]

// rgba(255,255,255)
// rgba(242,234,190)
// rgba(245,132,26)
// rgba(197,60,4)
// rgba(216,2,5)
// rgba(53,79,216)

const numberOfCircles = 30
let circleArray = []

class Home extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = createRef()
    this.canvasContainerRef = createRef()

    this.state = {
      mousePosition: {
        x: undefined,
        y: undefined,
      },
      canvasSize: null,
    }
  }

  makeCircles = (radius, x, y, dx, dy, color, opacity, zoomedRadius) => {
    const c = this.canvasRef.current.getContext("2d")
    const self = this
    // Declare a Circle object
    var circle = {
      radius,
      x, // Position along x-axis
      y, // Position along y-axis
      dx, // x-velocity
      dy, // y-velocity
      color,
      opacity,
      zoomedRadius,
      minRadius: radius, // Helpful so circles return to their original state later on
      draw: function() {
        // Draws a circle when invoked
        c.save()
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = `${this.color}${this.opacity})`
        c.shadowColor = "#E3EAEF"
        c.shadowBlur = 20
        c.fill()
        c.closePath()
        c.restore()
      },
      update: function() {
        // Updates circles in various ways when invoked
        // Bounce circles off x-axis walls
        if (
          this.x + this.radius > self.canvasRef.current.width + 20 ||
          this.x - this.radius < 0 - 20
        ) {
          this.dx = -this.dx
        }
        // Bounce circles off y-axis walls
        if (
          this.y + this.radius > self.canvasRef.current.height + 20 ||
          this.y - this.radius < 0 - 20
        ) {
          this.dy = -this.dy
        }

        // Sets circles velocity
        this.x += this.dx
        this.y += this.dy

        // Interactivity; Updates circles based on the mouseArea
        let mouseArea = 75
        if (
          self.state.mousePosition.x - this.x < mouseArea &&
          self.state.mousePosition.x - this.x > -mouseArea &&
          self.state.mousePosition.y - this.y < mouseArea &&
          self.state.mousePosition.y - this.y > -mouseArea
        ) {
          // Circle Growth
          if (this.radius < zoomedRadius) {
            let innerGrowth = 5 // 1st statement: Grows all circles central enough to expand quickly
            let outerGrowth = 1 // 2nd statement: Grows all circles not central enough to expand quickly
            if (
              this.x + zoomedRadius + innerGrowth <
                self.canvasRef.current.width &&
              this.y + zoomedRadius + innerGrowth <
                self.canvasRef.current.height &&
              !(this.x - zoomedRadius - innerGrowth < 0) &&
              !(this.y - zoomedRadius - innerGrowth < 0)
            ) {
              this.radius += innerGrowth // 1st Statement
            } else if (
              this.x + this.radius + outerGrowth <
                self.canvasRef.current.width &&
              this.y + this.radius + outerGrowth <
                self.canvasRef.current.height &&
              !(this.x - this.radius - outerGrowth < 0) &&
              !(this.y - this.radius - outerGrowth < 0)
            ) {
              this.radius += outerGrowth // 2nd Statement
            }
          }
          // Circle Shrinkage
        } else if (this.radius > this.minRadius) {
          this.radius -= 3
        }

        // Call draw function on this object
        this.draw()
      },
    }
    return circle
  }

  init = () => {
    circleArray = []
    // Creates circles with random values
    for (let i = 0; i < numberOfCircles; i++) {
      let radius = Math.random() * 2 + 3
      let zoomedRadius = radius * 3
      let x =
        Math.random() * (this.canvasRef.current.width - radius * 2) + radius // Spawns circle anywhere along x-axis canvas minus the circle size
      let y =
        Math.random() * (this.canvasRef.current.height - radius * 2) + radius // Spawns circle anywhere along y-axis canvas minus the circle size
      let dx = (Math.random() - 0.5) * 1 // Sets a starting velocity in either left or right direction
      let dy = (Math.random() - 0.5) * 1 // Sets a starting velocity in either up or down direction
      let color = colors[Math.floor(Math.random() * colors.length)]
      let opacity = Math.random()
      circleArray.push(
        this.makeCircles(radius, x, y, dx, dy, color, opacity, zoomedRadius)
      )
    }
  }

  animate = () => {
    const c = this.canvasRef.current.getContext("2d")
    requestAnimationFrame(this.animate) // Creates loop with callback function 'animate'
    c.clearRect(
      0,
      0,
      this.canvasRef.current.width,
      this.canvasRef.current.height
    ) // Clears canvas when called
    for (let i = 0; i < circleArray.length; i++) {
      // Calls update method of Circle on every circle when animate is called
      circleArray[i].update()
    }
  }

  handleResize = () => {
    this.setState({
      canvasSize: {
        width: this.canvasContainerRef.current.offsetWidth,
        height: this.canvasContainerRef.current.offsetHeight,
      },
    })
    this.init()
  }

  componentDidMount = async () => {
    await this.setState({
      canvasSize: {
        width: this.canvasContainerRef.current.offsetWidth,
        height: this.canvasContainerRef.current.offsetHeight,
      },
    })
    await console.log(this.state)
    await this.init()
    requestAnimationFrame(this.animate)
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  renderCanvas = () => {
    const { width, height } = this.state.canvasSize
    return (
      <canvas
        ref={this.canvasRef}
        width={width}
        height={height}
        onMouseMove={e =>
          this.setState({
            mousePosition: {
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
            },
          })
        }
      />
    )
  }

  render() {
    return (
      <section className="home" id="home">
        <div className="canvas-container" ref={this.canvasContainerRef}>
          {this.state.canvasSize && this.renderCanvas()}
        </div>
        <div className="intro-container">
          <h1>
            Hello! I'm <span>Caleb Lovell</span>.
          </h1>
          <h1>I'm a web developer.</h1>
          <Link to="#about">
            <button>
              View my work <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </section>
    )
  }
}

export default Home
