import React from "react"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="title">Contact</h1>
      <p>Have a question or just want to say hi?</p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onsubmit="return false"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="hidden"
          name="bot-field"
          value="Don't fill this out if you're a human."
        />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <div>
          <button type="submit">SEND</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
