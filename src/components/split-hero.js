import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const SplitHero = () => (
  <div className="split-hero-wrapper">
    <div className="split-hero-box">
      <StaticImage
        src="../images/soap-solid.svg"
        alt="Soap"
        className="split-child"
        placeholder="tracedSVG"
      />
    </div>
    <div className="split-hero-box">
      <StaticImage
        src="../images/soap.jpeg"
        alt="Soap"
        className="split-child"
        placeholder="tracedSVG"
      />
    </div>
    <div className="split-hero-box">
      <StaticImage
        src="../images/soap-solid.svg"
        alt="Soap"
        className="split-child"
        placeholder="tracedSVG"
      />
    </div>
  </div>
)
export default SplitHero
