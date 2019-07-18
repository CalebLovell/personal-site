import React, { useState } from "react"

import Swal from "sweetalert2"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
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
    if (name !== `` && email !== `` && message !== ``) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() =>
          Swal.fire({
            title: "Message Sent",
            text: "I'll get back to you as soon as possible!",
            type: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "rgb(214, 28, 81)",
          })
        )
        .catch(error =>
          Swal.fire({
            title: "Error",
            text:
              "Sorry! Something went wrong. You can email me directly at caleblovell1@gmail.com or reach me through one of my social links below. Sorry for the inconvenience!",
            type: error,
            confirmButtonText: "OK",
            confirmButtonColor: "rgb(214, 28, 81)",
          })
        )
    } else {
      Swal.fire({
        title: "Error",
        text: `Please make sure you have entered a name, email and message before sending.`,
        type: `error`,
        confirmButtonText: "OK",
        confirmButtonColor: "rgb(214, 28, 81)",
      })
    }
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
