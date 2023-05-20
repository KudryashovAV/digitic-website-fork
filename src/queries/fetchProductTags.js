import { gql } from '@apollo/client';

const FETCH_PRODUCT_TAGS_QUERY = gql`
  query getProductTags($count: Int!) {
  productTags(first: $count) {
    # StringConnection fields
    edges {
      node
    }
  }
}
`

export default FETCH_PRODUCT_TAGS_QUERY;
