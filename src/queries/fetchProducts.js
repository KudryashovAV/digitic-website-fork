import { getStorefrontApiUrl } from '../services/shopify-client.js';

const GRAPHQL_QUERY = `
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
            width
            height
            altText
          }
        }
      }
    }
  }
}
`

export async function getServerSideProps() {
  const response = await fetch(getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
    }),
    headers: {
      "X-Shopify-Storefront-Access-Token": "f87500015141de4171fc410191faf6bb",
      "X-SDK-Variant":"hydrogen-react",
      "X-SDK-Variant-Source": "react",
      "X-SDK-Version": "2023-04",
      "content-type": "application/json"
    },
    method: 'POST',
  });

  const json = await response.json();

  return json;
}
