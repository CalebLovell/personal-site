import React from "react"

const Footer = () => {
  return (
    <footer>
      <p>Custom Built with Gatsby</p>
      <a href={`https://github.com/CalebLovell/personal-site`} target="_blank" rel="noopener noreferrer">      
        <div className="img-container">
          <img src="social/github.svg" alt="github" className="github"></img>
        </div>
      </a>
      <p>Caleb Lovell &copy; 2019</p>
    </footer>
  )
}

export default Footer
