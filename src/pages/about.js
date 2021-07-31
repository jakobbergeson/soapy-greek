/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import HeadTag from "../components/head"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const SecondPage = () => (
  <Layout>
    <HeadTag title="About Me" />
    <StaticImage
      src="../images/soap-hero.jpg"
      loading="eager"
      aspectRatio={18 / 4}
      layout="fullWidth"
      placeholder="blurred"
      formats={["AUTO", "WEBP", "AVIF", "JPG"]}
      alt="Soap Hero"
    />
    <div className="hero-title">
      <h1>- Hey there! I'm the Soapy Greek -</h1>
    </div>
    <div className="story-wrapper">
      <div className="story-box">
        <p className="story-child">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis
          nunc ac egestas aliquet. Nunc vulputate justo at viverra volutpat.
          Nunc fermentum mauris mollis, hendrerit ex vitae, imperdiet nisl.
          Etiam egestas mauris ut nisi bibendum fringilla. Maecenas eget dui
          magna. Suspendisse dictum, ante quis porta fermentum, erat nunc
          consequat augue, in vehicula dolor dolor sit amet tellus.<br></br>{" "}
          <br></br>Donec in nibh at turpis auctor auctor nec non risus. Mauris
          ut sollicitudin lectus. Nulla tincidunt, dui sit amet pharetra
          placerat, erat diam tincidunt sapien, tempor bibendum felis dui vel
          diam. <br></br> <br></br>Curabitur a odio vitae ligula vulputate
          condimentum. Donec quis consequat justo. In lobortis quam vitae luctus
          volutpat. Proin at feugiat enim. Nulla mauris metus, posuere sed
          aliquet laoreet, vehicula nec ante. Sed aliquam scelerisque elementum.
          In vitae hendrerit magna, ac vulputate nibh. Nulla ullamcorper
          scelerisque feugiat.
        </p>

        <div className="story-child">
          <StaticImage
            src="../images/soap-solid.svg"
            height={400}
            loading="eager"
            placeholder="blurred"
            alt="Soap"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
