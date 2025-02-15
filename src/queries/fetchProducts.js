import {gql} from "@apollo/client";

const FETCH_PRODUCTS_QUERY = gql`
  query getProducts($count: Int!) {
  products(
    first: $count
  ) {
    edges {
      cursor
      node {
        id
        tags
        title
        vendor
        description
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          nodes {
            src
            altText
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`

export default FETCH_PRODUCTS_QUERY;
