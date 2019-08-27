/* eslint-disable import/no-extraneous-dependencies */

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'isomorphic-fetch';

class GQLClient {
  constructor() {
    const httpLink = createHttpLink({
      uri: 'https://graphql.fauna.com/graphql',
    });

    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.FAUNA_DB_SECRET}`,
      },
    }));

    const defaultOptions = {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    };

    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      defaultOptions,
    });
  }
}

const gqlClient = new GQLClient();

export default gqlClient.client;
