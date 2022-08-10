import { gql } from '@apollo/client'

export const CREATE_PROJECT = gql`
  mutation createProject(
    $name: String!
    $description: String!
    $status: projectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      name
      description
      id
      client {
        name
        phone
        email
      }
    }
  }
`
