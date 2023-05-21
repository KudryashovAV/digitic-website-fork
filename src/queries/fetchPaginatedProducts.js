import {gql} from "@apollo/client";

const FETCH_PAGINATED_PRODUCTS_QUERY = gql`
  query getProducts($count: Int!, $cursor: String!) {
  products(
    first: $count
    after: $cursor
  ) {
    edges {
      cursor
      node {
        id
        tags
        title
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
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

export default FETCH_PAGINATED_PRODUCTS_QUERY;
