import { ApolloClient, InMemoryCache } from '@apollo/client'
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})

export const Client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache,
})
