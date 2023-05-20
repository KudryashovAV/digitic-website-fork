import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

const client = new ApolloClient({
  uri: "https://test-test-toys.myshopify.com/api/2023-04/graphql.json",
  cache: new InMemoryCache(),
});


root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
