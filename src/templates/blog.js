import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do YYYY, h:mm a")
      body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            fixed {
              src
            }
          }
        }
      }
    }
  }
`

const Text = ({ children }) => <p className="story-child">{children}</p>


const body = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return <div className="story-child"><img src={node.data.target.fixed.src} alt={node.data.target.title}></img></div> 
    },
  },
}

const Blog = props => {
  return (
    <Layout>
    <Head title={props.data.contentfulBlogPost.title} />
    <div className="story-wrapper">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p> {props.data.contentfulBlogPost.publishedDate}</p>
        <div className="story-box">
        {renderRichText(props.data.contentfulBlogPost.body, body)}
        </div>
    </div>
    </Layout>
  )
}

export default Blog
