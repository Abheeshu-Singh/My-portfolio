import React from "react"
import {
  FaGithub,
  FaLinkedin,

  FaInstagram,
} from "react-icons/fa"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <ul>
        <li>
          <a href="https://github.com/Abheeshu-Singh" target="blank">
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abheeshu-singh-8a9691143/" target="blank">
            <FaLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/abheeshu_thakur/" target="blank">
            <FaInstagram className="icon" />
          </a>
        </li>
        </ul>
      </div>
      <p className="footer__text">Built by Abheeshu Singh</p>
    </footer>
  )
}

export default Footer
