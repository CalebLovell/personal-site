import React from "react"

const Contact = () => {
  return (
    <section className="contact">
      <form name="contact" method="post" data-netlify="true">
        <input type="text" name="name" placeholder="Name" ></input>
        <input type="text" name="email" placeholder="Email" ></input>
        <textarea name="message" placeholder="Message" rows="7"></textarea>
        <div data-netlify-recaptcha="true"></div>
        <button>Send</button>
      </form>
    </section>
  )
}

export default Contact
