import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./hero.scss"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__text hero__text--1">Hi, my name is</p>
        <h1 className="hero__name">
          Abheeshu Singh<span className="hero__dot"></span>
        </h1>
        <h2 className="hero__subtitle">
          I build things for Android and iOS<span className="hero__dot1"></span>
        </h2>
        <p className="hero__text hero__text--2">
          I'm a Flutter Developer based in Noida, India. You can check out my
          work below.
        </p>

        <button className="hero__btn" onClick={() => scrollTo("#work")}>
          Portfolio
        </button>
      </div>
    </section>
  )
}

export default Hero
