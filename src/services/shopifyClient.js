import {createStorefrontClient} from "@shopify/hydrogen-react";
const client = createStorefrontClient({
  privateStorefrontToken: 'f87500015141de4171fc410191faf6bb',
  storeDomain: 'https://test-test-toys.myshopify.com',
  storefrontApiVersion: '2023-04',
});

const shopifyHeaders = {
  "X-Shopify-Storefront-Access-Token": "f87500015141de4171fc410191faf6bb",
  "Shopify-Storefront-Buyer-IP": "test-toys",
  "X-SDK-Variant":"hydrogen-react",
  "X-SDK-Variant-Source": "react",
  "X-SDK-Version": "2023-04",
  "content-type": "application/json"
}

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export default shopifyHeaders;