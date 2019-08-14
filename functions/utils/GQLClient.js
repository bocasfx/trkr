/* eslint-disable import/no-extraneous-dependencies */

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ifetch from 'isomorphic-fetch';

class GQLClient {
  constructor() {
    const httpLink = createHttpLink({
      uri: 'https://graphql.fauna.com/graphql',
    });

    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: 'Bearer fnADVr6A-rACDec0gdM07iLOoy1THsP8uCN1J5Wg',
      },
    }));

    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }
}

const gqlClient = new GQLClient();

export default gqlClient.client;
