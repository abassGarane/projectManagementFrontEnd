import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      description
      status
      client {
        name
        id
        email
        phone
      }
    }
  }
`

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      name
      description
      id
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`
