/* eslint-disable import/no-extraneous-dependencies */

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

class GQLClient {
  constructor() {
    const httpLink = createHttpLink({
      uri: 'https://graphql.fauna.com/graphql',
    });

    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: 'Bearer fnADVoam88ACA0oQyg_YJgCCC-t6Py6YmcK5zKwi',
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
