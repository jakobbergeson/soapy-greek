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
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            fixed {
              src
            }
          }
        }
      }
    }
  }
`

const bodyPic = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return <img src={node.data.target.fixed.src} alt="bandage"></img>
    },
  },
}

const Blog = props => {
  return (
    <Layout>
    <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p> {props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.body, bodyPic)}
    </Layout>
  )
}

export default Blog
