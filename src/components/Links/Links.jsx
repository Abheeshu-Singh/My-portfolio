import React from "react"
import "./links.scss"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

const Links = () => {
  return (
    <div className="links">
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
  )
}

export default Links
