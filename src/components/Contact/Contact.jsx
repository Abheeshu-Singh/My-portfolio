import React from "react"
import "./contact.scss"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">Get In Touch</h1>

      <div>
        <a className="contact__phone" href="tel:08178 072991">
          +91 8178072991
        </a>
      </div>
      <button className="contact__btn">
        <a href="mailto:asingh525kumar@gmail.com">Email Me</a>
      </button>
    </section>
  )
}
export default Contact
