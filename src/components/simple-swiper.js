import React, { useState, useEffect, useCallback } from "react"
import Swiper from "react-id-swiper"
import "swiper/swiper.min.css"
import { StaticImage } from "gatsby-plugin-image"

const SimpleSwiper = ({ images, index }) => {
  const [swiper, setSwiper] = useState(null)
  useEffect(() => {
    if (swiper !== null) {
      swiper.slideToLoop(index)
    }
  }, [swiper, index])

  const params = {
    getSwiper: setSwiper,
    slidesPerView: 1,
    loop: true,
    calculateHeight: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
  }

  const goNext = useCallback(() => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  })

  const goPrev = useCallback(() => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  })

  return (
    <>
      <div onClick={goPrev} />
      <div onClick={goNext} />
      <div style={{ display: "flex", alignItems: "center", height: "inherit" }}>
        <Swiper {...params}>
          <StaticImage
            src="../images/soap.jpeg"
            width={"33.33%"}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A bar of soap"
            style={{ marginBottom: `1.45rem` }}
          />
          <StaticImage
            src="../images/soap.jpeg"
            width={"33.33%"}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A bar of soap"
            style={{ marginBottom: `1.45rem` }}
          />
          <StaticImage
            src="../images/soap.jpeg"
            width={"33.33%"}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A bar of soap"
            style={{ marginBottom: `1.45rem` }}
          />
        </Swiper>
      </div>
    </>
  )
}
export default SimpleSwiper
