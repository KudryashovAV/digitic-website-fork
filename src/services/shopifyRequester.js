import { getStorefrontApiUrl } from './shopifyClient.js';

export async function getServerSideProps(query) {
  const response = await fetch(getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: query,
    }),
    headers: {
      "Shopify-Storefront-Buyer-IP": "test-toys",
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
