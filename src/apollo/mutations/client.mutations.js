import { gql } from '@apollo/client'
export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      name
      email
    }
  }
`
export const CREATE_CLIENT = gql`
  mutation createClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      phone
      email
    }
  }
`
