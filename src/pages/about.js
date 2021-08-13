/** @jsx jsx */
import { jsx } from "theme-ui"
import HeadTag from "../components/head"
import Layout from "../components/layout"
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

  return(

<Layout>
  <HeadTag title="About Me" />
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
  <div className="story-wrapper">
    <div className="story-box">
      <p className="story-child">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis
        nunc ac egestas aliquet. Nunc vulputate justo at viverra volutpat.
        Nunc fermentum mauris mollis, hendrerit ex vitae, imperdiet nisl.
        Etiam egestas mauris ut nisi bibendum fringilla. Maecenas eget dui
        magna. Suspendisse dictum, ante quis porta fermentum, erat nunc
        consequat augue, in vehicula dolor dolor sit amet tellus.<br></br>{" "}
        <br></br>Donec in nibh at turpis auctor auctor nec non risus. Mauris
        ut sollicitudin lectus. Nulla tincidunt, dui sit amet pharetra
        placerat, erat diam tincidunt sapien, tempor bibendum felis dui vel
        diam. <br></br> <br></br>Curabitur a odio vitae ligula vulputate
        condimentum. Donec quis consequat justo. In lobortis quam vitae luctus
        volutpat. Proin at feugiat enim. Nulla mauris metus, posuere sed
        aliquet laoreet, vehicula nec ante. Sed aliquam scelerisque elementum.
        In vitae hendrerit magna, ac vulputate nibh. Nulla ullamcorper
        scelerisque feugiat.
      </p>

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
    </div>
  </div>
</Layout>
)
        }


export default SecondPage
