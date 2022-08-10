import React from 'react'
import { useQuery } from '@apollo/client'
import { Container, Spinner, Table } from 'react-bootstrap'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../apollo/queries/client.queries'

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)
  if (loading) {
    return (
      <p>
        <Spinner as={'span'} />
      </p>
    )
  }
  if (error) {
    return <p>Errors : {error}</p>
  }
  return (
    <>
      <h2>Clients</h2>
      {!loading && !error && (
        <Table striped bordered className='mb-6'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow client={client} key={client.id} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default Clients
