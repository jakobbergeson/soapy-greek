import * as React from "react";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from 'gatsby-background-image';


const ProjectHero = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulProjectHero{
          edges{
            node{
              heroTitle
              heroImage {
                title
                gatsbyImageData
                fluid {
                  src
                }
            }
          }
        }
      }
    }
  `);

  const image = getImage(data.allContentfulProjectHero.edges[0].node.heroImage);

  const bgImage = convertToBgImage(image);

  return (

    <BackgroundImage
      className="projects-hero "
      {...bgImage}
      preserveStackingContext
    >
      <div className="projects-hero-title" >
        <div className="title-line" />
        <h1>{data.allContentfulProjectHero.edges[0].node.heroTitle}</h1>
        <div className="title-line" />
      </div>
    </BackgroundImage>
  );
};


export default ProjectHero;