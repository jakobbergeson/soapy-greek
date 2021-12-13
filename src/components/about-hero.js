/** @jsx jsx */
import { jsx } from "theme-ui";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from 'gatsby-background-image';


const AboutHero = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulAboutMeHero{
          edges{
            node{
              heroSentence
              heroImage {
                title
                gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const image = getImage(data.allContentfulAboutMeHero.edges[0].node.heroImage);

  const bgImage = convertToBgImage(image);
  return (

    <BackgroundImage
      className="story-hero"
      {...bgImage}
      preserveStackingContext
    >
      <div className="story-hero-title" >

        <div className="title-line" />
        <h1>{data.allContentfulAboutMeHero.edges[0].node.heroSentence}</h1>
        <div className="title-line" />
      </div>
    </BackgroundImage>
  );
};


export default AboutHero;