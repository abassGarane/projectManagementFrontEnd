import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { CREATE_CLIENT } from '../apollo/mutations/client.mutations'
import { GET_CLIENTS } from '../apollo/queries/client.queries'

const NewClient = () => {
  // Modal state
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)

  // alerts
  const [showAlert, setAlertShow] = useState(false)

  //shared by modal and alert
  const handleClose = () => {
    setShow(false)
  }
  const handleAlertClose = () => {
    setAlertShow(true)
  }

  // create state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // submit form
  const [addClient] = useMutation(CREATE_CLIENT, {
    variables: {
      name,
      email,
      phone,
    },
    refetchQueries: [{ query: GET_CLIENTS }],
    //   update(cache, { data: addClient }) {
    //     const clients = cache.readQuery({ query: GET_CLIENTS })
    //     cache.writeQuery({
    //       query: GET_CLIENTS,
    //       data: { clients: clients.concat([addClient]) },
    //     })
    //   },
  })
  const handleClick = () => {
    handleClose()
    handleAlertClose()
  }
  const handleSubmit = (e) => {
    // stuff happens here
    e.preventDefault()
    console.log({
      name,
      email,
      phone,
    })
    addClient(name, email, phone)
    setEmail('')
    setName('')
    setPhone('')
  }
  return (
    <Container>
      <h2>Create A New Project</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Full Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Phone Number'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={handleClick}>
          Create
        </Button>
      </Form>
    </Container>
  )
}

export default NewClient
