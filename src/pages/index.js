import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import HeadTag from "../components/head"
import SplitHero from "../components/split-hero"
import SimpleSwiper from "../components/simple-swiper"

const IndexPage = () => (
  <Layout>
    <HeadTag title="Home" />
    <SplitHero
      videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
      videoTitle="Never Gonna Give You Up"
    />
    <br></br>
    <SimpleSwiper />
  </Layout>
)

export default IndexPage
