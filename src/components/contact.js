import React from "react"

const Contact = () => {
  return (
    <section className="contact">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows="7" />
        <div data-netlify-recaptcha="true" />
        <button>Send</button>
      </form>
    </section>
  )
}

export default Contact
