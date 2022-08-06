import React from 'react'
import { Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../apollo/mutations/client.mutations'
import { GET_CLIENTS } from '../apollo/queries/client.queries'

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {
      id: client.id,
    },
    refetchQueries: [{ query: GET_CLIENTS }], //==> for small api
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS })
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      })
    },
  })
  return (
    <tr>
      <th>{client.name}</th>
      <th>{client.email}</th>
      <th>{client.phone}</th>
      <th>
        <Button onClick={deleteClient} href={`/client/${client.id}`}>
          <FaTrash color='#fff' className='ml-4' />
        </Button>
      </th>
    </tr>
  )
}

export default ClientRow
