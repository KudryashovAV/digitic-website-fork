const FETCH_PRODUCTS_QUERY = `
  {
  products(first: 5) {
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

export default FETCH_PRODUCTS_QUERY;
