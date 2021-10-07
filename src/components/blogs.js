import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from 'gatsby-background-image';

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(limit:4 sort: { fields: publishedDate, order: DESC }){
      edges {
        node {
          title
          body {
            raw
          }
          slug
          publishedDate(formatString: "MMM D")
          blogPicture {
						gatsbyImageData(width: 300)
          }
        }
      }
    }
  }
  `);


  return (
    <div className="posts-wrapper">
      <h1>Blog</h1>
      <ol className="posts">
        {data.allContentfulBlogPost.edges.map(({ node }) => {

          const image = getImage(node.blogPicture);

          const bgImage = convertToBgImage(image);

          const body = {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, children) => {

                children[0].length > 250 ? children = children[0].substr(0, 250) + '...'
                  : children = children;

                return (
                  <p>{children}</p>
                );
              }
            }
          };

          return (
            <li className="post">
              <Link to={`/blog/${node.slug}`}>
                <BackgroundImage
                  className="post-picture"
                  {...bgImage}
                  preserveStackingContext
                >
                  <div className="post-date">
                    <h4>{node.publishedDate}</h4>
                  </div>
                </BackgroundImage>
                <div className="post-preview">
                  <h3>{node.title}</h3>
                  {renderRichText(node.body, body)[0]}
                  <div className="title-line stretch"></div>
                  <h5 className="arrow"
                  >Read More
                  </h5>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Blog;
