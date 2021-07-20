import React from "react"
import ToggleButton from "../ToggleButton/ToggleButton"
import scrollTo from "gatsby-plugin-smoothscroll"

import logo from "../../../images/logo.png"
import "./navbar.scss"

const Navbar = ({ isOpen, drawerClickHandler }) => {
  return (
    <header>

      <h2 onClick={() => scrollTo("#home")}>
        A<span>S</span>
      </h2>
      
      {/* <img
        onClick={() => scrollTo("#home")}
        className="logo"
        src={logo}
        alt=""
      /> */}

      <nav className="nav">
        <ul className="nav__links">
          <li>
            <button className="nav__link" onClick={() => scrollTo("#about")}>
              About
            </button>
          </li>
          <li>
            <button className="nav__link" onClick={() => scrollTo("#work")}>
              Work
            </button>
          </li>
          <li>
            <button className="nav__link" onClick={() => scrollTo("#contact")}>
              Contact
            </button>
          </li>
          
          <ToggleButton isOpen={isOpen} click={drawerClickHandler} />
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
