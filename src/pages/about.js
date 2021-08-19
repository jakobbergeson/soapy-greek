/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage, getImage,StaticImage } from "gatsby-plugin-image"
import { graphql,  useStaticQuery } from "gatsby"



const SecondPage = () => {

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
  `)

  const image = getImage(data.allContentfulAboutMeHero.edges[0].node.heroImage)

  return (
<>
    <div className="story-hero">
    <h1>{data.allContentfulAboutMeHero.edges[0].node.heroSentence}</h1>
    <GatsbyImage image={image} alt={data.allContentfulAboutMeHero.edges[0].node.heroImage.title} 
    style={{
    zIndex: "-1",
    position: "absolute",
    top: "0",
    left:"0"
    }}/>
    </div>
        <div className="story-child-img">
          <StaticImage
            src="../images/soap.jpeg"
            loading="eager"
            placeholder="blurred"
            alt="Soap"
            transformOptions={{fit: "fill", cropFocus: "attention"}}
            style={{
              opacity: "0.5",
            }}
          />
        </div>
    </>
  )
}


export default SecondPage
