import React from "react"

const Contact = () => {
  return (
    <section className="contact">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="hidden"
          name="bot-field"
          value="Don't fill this out if you're a human "
        />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows="7" />
        <div data-netlify-recaptcha="true" />
        <button>Send</button>
      </form>
    </section>
  )
}

export default Contact
