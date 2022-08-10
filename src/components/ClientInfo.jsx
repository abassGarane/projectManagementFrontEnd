import React from 'react'
import { ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { IoIosPerson } from 'react-icons/io'

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5>Client Information</h5>
      <ListGroup>
        <ListGroupItem style={{ width: '30rem' }}>
          <IoIosPerson
            color='blue'
            className=''
            style={{ fontSize: '2rem', marginRight: '1rem' }}
          />
          {client.name}
        </ListGroupItem>
        <ListGroupItem style={{ width: '30rem' }}>
          <FaEnvelope
            color='blue'
            className=''
            style={{ fontSize: '2rem', marginRight: '1rem' }}
          />
          {client.email}
        </ListGroupItem>
        <ListGroupItem style={{ width: '30rem' }}>
          <FaPhone
            color='blue'
            className=''
            style={{ fontSize: '2rem', marginRight: '1rem' }}
          />
          {client.phone}
        </ListGroupItem>
      </ListGroup>
    </>
  )
}

export default ClientInfo
