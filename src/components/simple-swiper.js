import React, { Component } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-wrapper">
        <Slider {...settings} className="slider">
          <div>
            <StaticImage
              className="slider-child"
              src="../images/soap.jpeg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A bar of soap"
            />
          </div>
          <div>
            <StaticImage
              className="slider-child"
              src="../images/soap.jpeg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A bar of soap"
            />
          </div>
          <div>
            <StaticImage
              className="slider-child"
              src="../images/soap.jpeg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A bar of soap"
            />
          </div>
          <div style={{ height: "100%" }}>
            <StaticImage
              className="slider-child"
              src="../images/soap.jpeg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A bar of soap"
            />
          </div>
          {/* <div> */}
          {/* <StaticImage
              className="slider-child"
              src="../images/soap.jpeg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A bar of soap"
            />
          </div>
          <div>
            <StaticImage
              src="../images/soap.jpeg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A bar of soap"
            />
          </div>
          <div>
            <StaticImage
              src="../images/soap.jpeg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A bar of soap"
            />
          </div> */}
        </Slider>
      </div>
    )
  }
}
