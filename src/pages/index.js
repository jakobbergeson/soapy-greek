import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import HeadTag from "../components/head"

const IndexPage = () => (
  <Layout>
    <HeadTag title="Home" />
    <h1>Hi people</h1>
    <StaticImage
      src="../images/soap.jpeg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <br></br>
    <StaticImage
      src="../images/soap.jpeg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
