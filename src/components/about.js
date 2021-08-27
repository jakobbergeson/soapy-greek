import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulAboutMeStory( limit: 1 sort: { fields: publishedDate, order: DESC }) {
	    edges {
        node {
          title
          slug
        }
      }
    }
  }
`)

  return (
    <>
      { data.allContentfulAboutMeStory.edges.map(({ node })=>(
        <Link to={`/about/${node.slug}`}>
          {node.title}
        </Link>
        ))
      }
    </>
  )
}

export default About
