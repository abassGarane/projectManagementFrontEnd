import React, { useState } from 'react'
import Navigation from './components/Navigation'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { Button, Container, Row, Col, Modal } from 'react-bootstrap'
import Clients from './components/Clients'
import CreateClient from './components/CreateClient'

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

const Client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache,
})

const App = () => {
  return (
    <>
      <ApolloProvider client={Client}>
        <Navigation />

        <Container>
          <CreateClient />
          <Clients />
        </Container>
      </ApolloProvider>
    </>
  )
}

export default App
