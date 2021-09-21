/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Component } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link , useStaticQuery} from "gatsby"
import { getShopifyImage } from "gatsby-source-shopify"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const SimpleSlider = () => {

  const data = useStaticQuery(graphql`
  query {
    collection: allShopifyCollection(
      filter: {
      title: {eq: "Featured"}
      }){
      edges{
        node{
          products {
            id
            title
            slug: gatsbyPath(
              filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
            )
            images {
              gatsbyImageData
            }
          }
        }
       }
      }
    }
  `
)
    
  const featured = data.collection.edges[0].node.products

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 770,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  return (
    <div className="slider-wrapper">
      <Slider {...settings} className="slider">
        {featured.map(( products ) => {
         return(
              <div 
              key={products.id}
              className="slider-child"
              >
                <Link to={products.slug}>
                  <GatsbyImage
                    image={products.images[0].gatsbyImageData}
                    
                    alt={products.title}
                  />
                </Link>
                </div>
            )})
          }
      </Slider>
    </div>
  )
}
export default SimpleSlider