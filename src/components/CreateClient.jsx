import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Alert, Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { CREATE_CLIENT } from '../apollo/mutations/client.mutations'
import { GET_CLIENTS } from '../apollo/queries/client.queries'

const CreateClient = () => {
  // Modal state
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)

  // alerts
  const [showAlert, setAlertShow] = useState(false)

  //shared by modal and alert
  const handleClose = () => {
    setShow(false)
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
    <Row>
      <Col>
        {showAlert && (
          <Alert
            variant='primary'
            dismissible
            onClose={() => setAlertShow(false)}>
            Client Successifuly created
          </Alert>
        )}

        {/* <Button onClick={() => setShow(true)}></Button>/ */}
      </Col>
      <Col xs={6} className='container mr-10 mb-5'>
        <Button onClick={handleShow}>Create Client</Button>
      </Col>
      <Col xs={12}>
        <Modal show={show} onHide={handleClose} centered>
          {/* <CreateClient handleClose={handleClose} />  */}
          <Modal.Header>
            <Modal.Title>Create Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
              <Button variant='primary' type='submit' onClick={handleClose}>
                Create
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  )
}

export default CreateClient
