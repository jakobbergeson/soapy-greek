import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(limit:10 sort: { fields: publishedDate, order: DESC }){
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
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post">
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
export default Blog
