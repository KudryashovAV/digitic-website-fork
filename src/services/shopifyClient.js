import {createStorefrontClient} from "@shopify/hydrogen-react";
const client = createStorefrontClient({
  privateStorefrontToken: 'f87500015141de4171fc410191faf6bb',
  storeDomain: 'https://test-test-toys.myshopify.com',
  storefrontApiVersion: '2023-04',
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;