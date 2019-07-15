import React, { useState } from "react"

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const Contact = () => {
  const [name, setName] = useState(``)
  const [email, setEmail] = useState(``)
  const [message, setMessage] = useState(``)

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }

  const handleChangeMessage = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message })
    })
      .then(() => alert(`yay`))
      .catch(error => alert(error))
  }

  return (
    <section className="contact" id="contact">
      <h1 className="title">Contact</h1>
      <p>Have a question or just want to say hi?</p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="hidden"
          name="bot-field"
          value="Don't fill this out if you're a human."
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChangeName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChangeEmail}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChangeMessage}
        />
        <div>
          <button type="submit">SEND</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
