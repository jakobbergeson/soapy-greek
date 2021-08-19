import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do YYYY, h:mm a")
      body {
        raw
      }
      blogPicture{
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

const Blog = props => {
  const image = getImage(props.data.contentfulBlogPost.blogPicture)
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className="story-wrapper">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p> {props.data.contentfulBlogPost.publishedDate}</p>
        <div className="story-box">
        <div className="story-child-text">
          {renderRichText(props.data.contentfulBlogPost.body, body)}
        </div>
        {image &&
          <div className="story-child-img">
            <GatsbyImage 
            image={image} 
            alt={props.data.contentfulBlogPost.blogPicture.title}
            />
          </div>
        }
        </div>
      </div>
    </Layout>
  )
}

export default Blog
