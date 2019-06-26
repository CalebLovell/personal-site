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
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="E-mail" />
        <textarea name="message" placeholder="Message" rows="7" />
        <div data-netlify-recaptcha="true" />
        <button>Send</button>
      </form>
    </section>
  )
}

export default Contact
