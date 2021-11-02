import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import Head from "../../../components/head";
import { ProductListing } from "../../../components/product-listing";

export default function Products({
  data: { products }
}) {
  return (
    <Layout>
      <Head title={'Store'} />
      <ProductListing products={products.nodes} />
    </Layout>
  );
}

export const query = graphql`
  query($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: publishedAt, order: ASC }
      limit: 24
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
