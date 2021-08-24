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

  const [dataOne, dataTwo, dataThree] = data.allContentfulSplitHero.edges

  const imageOne = dataOne.node.backgroundPicture.fixed.src
  const imageTwo = dataTwo.node.backgroundPicture.fixed.src
  const imageThree = dataThree.node.backgroundPicture.fixed.src

  const titleOne = dataOne.node.title
  const titleTwo = dataTwo.node.title
  const titleThree = dataThree.node.title

  const linkOne = dataOne.node.link
  const linkTwo = dataTwo.node.link
  const linkThree = dataThree.node.link

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
