import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      handle
      id
      title
      description
      variants{
        title
        price
      }
      images{
        gatsbyImageData(width: 500)
      }
    }
  }
`

const Product = ({ data })=> {
  console.log("DATA", data)
  const image = getImage(data.shopifyProduct.images[0])

  return(
      <Layout>
          <Head title={data.shopifyProduct.title}/>
          <div className="product-wrapper">
          <div className="product-box">
          <GatsbyImage image={image} alt={data.shopifyProduct.title}/>

          </div>

          </div>

      </Layout>

  )
}

export default Product