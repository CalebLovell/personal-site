import React from "react"

const Contact = () => {
  return (
    <section className="contact">
      <h1>contact view goes here</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text"></input>
        <button>Send</button>
      </form>
    </section>
  )
}

export default Contact
