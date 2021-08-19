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
                publishedDate(formatString: "MMMM Do YYYY")
            }
        }
    }
}
  `)

  return (
    
    <Link to={`/about/${data.allContentfulAboutMeStory.edges[0].node.slug}`}>
    {data.allContentfulAboutMeStory.edges[0].node.title}
    </Link>
  )
}
export default About
