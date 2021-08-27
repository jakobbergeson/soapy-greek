import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import AboutHero from "../components/about-hero"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    contentfulAboutMeStory(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do YYYY")
      body{
        raw
      }
      soapyGreekPortrait{
        gatsbyImageData(
          placeholder: BLURRED
          )
        title
      }
    }
  }
`

const body = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node,children) => <p>{children}</p>
  }
}

const About = props => {
  const image = getImage(props.data.contentfulAboutMeStory.soapyGreekPortrait)
  return (
    <Layout>
      <Head title={props.data.contentfulAboutMeStory.title} />
      <AboutHero/>
      <div className="story-wrapper">
          <div className="story-box">
            <div className="story-child-text">
            {renderRichText(props.data.contentfulAboutMeStory.body, body)}
            </div>
            {image && 
              <div className="story-child-img">
              <GatsbyImage 
              image={image} 
              alt={props.data.contentfulAboutMeStory.soapyGreekPortrait.title}
              />
              </div>
            }
            </div>
        </div> 
    </Layout>
  )
}

export default About