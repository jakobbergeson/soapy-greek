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
  
  const image = getImage(data.shopifyProduct.images[0])

  return(
      <Layout>
          <Head title={data.shopifyProduct.title}/>
          <div className="product-wrapper">
          <div className="product-box">
          <div className="product-child-img">
          <GatsbyImage image={image} alt={data.shopifyProduct.title}/>
          </div>
          <div className="product-child-text">
            <h1> {data.shopifyProduct.title} </h1>
            <h4> {data.shopifyProduct.description} </h4>
            <button className="cart-button"><h4>Add to Cart</h4></button>
          </div>
          </div>
          </div>

      </Layout>

  )
}

export default Product