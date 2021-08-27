import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(limit:4 sort: { fields: publishedDate, order: DESC }){
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do YYYY, h:mm a")
          
        }
      }
    }
  }
  `)

  return (
    <div className = "posts-wrapper">
      <h1>Blog</h1>
      <ol className="posts">
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          return (
            <li className="post">
              <Link to={`/blog/${node.slug}`}>
                <h2>{node.title}</h2>
                <p>{node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
export default Blog
