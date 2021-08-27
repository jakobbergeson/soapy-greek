import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import {Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export const query = graphql`
query {
    allShopifyProduct {
        edges {
            node {
                handle
                id
                title
                description
                priceRangeV2 {
                    minVariantPrice {
                        amount
                    }
                }
                variants {
                    title
                    price
                }
                images {
                    gatsbyImageData(
                    width: 300
                    )
                }
            }
        }
    }
}`

const Store = ({ data }) => {

return(
    <Layout>
        <Head title="Store"/>
        <div className="store-wrapper">
        <div >
            <ul className="store-box">
            {data.allShopifyProduct.edges.map(({ node }) => {
                    
                const image = getImage(node.images[0])

                return(
                <li key={node.shopifyId} className="store-child">
                <Link to={`/product/${node.handle}`}>
                <h3>
                    {node.title}
                </h3>
                <GatsbyImage image={image} alt={node.title} />
                <p>{node.description}</p>
                <p>{" - "}${node.priceRangeV2.minVariantPrice.amount}</p>
                    
                </Link>
                </li>
                    )
            })}
            </ul>

        </div>
        </div>
    </Layout>
)
}

export default Store