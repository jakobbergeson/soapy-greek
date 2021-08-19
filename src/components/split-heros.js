/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import SplitHero from "./split-hero"

const SplitHeros = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulSplitHero(sort: { fields: publishedDate, order: ASC }){
      edges{
        node{
          id
          title
          link
          backgroundPicture{
						title
            fixed{
							src
            }
          }
        }
      }
    }
	}
  `)

  const imageOne = data.allContentfulSplitHero.edges[0].node.backgroundPicture.fixed.src
  const imageTwo = data.allContentfulSplitHero.edges[1].node.backgroundPicture.fixed.src
  const imageThree = data.allContentfulSplitHero.edges[2].node.backgroundPicture.fixed.src

  const titleOne = data.allContentfulSplitHero.edges[0].node.title
  const titleTwo = data.allContentfulSplitHero.edges[1].node.title
  const titleThree = data.allContentfulSplitHero.edges[2].node.title

  const linkOne = data.allContentfulSplitHero.edges[0].node.link
  const linkTwo = data.allContentfulSplitHero.edges[1].node.link
  const linkThree = data.allContentfulSplitHero.edges[2].node.link

  return(
  <div className="split-hero-wrapper">
    <SplitHero 
    image={imageOne}
    title={titleOne}
    link={linkOne}
    />
    <SplitHero 
    image={imageTwo}
    title={titleTwo}
    link={linkTwo}
    />
    <SplitHero 
    image={imageThree}
    title={titleThree}
    link={linkThree}
    />
  </div>

  )
}

export default SplitHeros
