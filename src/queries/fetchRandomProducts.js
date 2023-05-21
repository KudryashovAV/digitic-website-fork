import {gql} from "@apollo/client";

const FETCH_RANDOM_PRODUCTS_QUERY = gql`
  query getProducts($count: Int!) {
  products(first: $count) {
    nodes {
      id
      title
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 1) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
    }
  }
}
`

export default FETCH_RANDOM_PRODUCTS_QUERY;
