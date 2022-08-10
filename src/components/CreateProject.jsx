import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CREATE_PROJECT } from '../apollo/mutations/project.mutations'
import { GET_CLIENTS } from '../apollo/queries/client.queries'

const CreateProject = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('Not Started')
  const [clientId, setClient] = useState(null)
  const { loading, error, data } = useQuery(GET_CLIENTS)
  //Enum for status in js
  const enumStatus = Object.freeze({
    new: 'Not Started',
    progress: 'In Progress',
    completed: 'Completed',
  })
  const [addProject] = useMutation(CREATE_PROJECT, {
    variables: {
      name,
      description,
      status,
      clientId,
    },
    refetchQueries: [{ query: GET_CLIENTS }],
  })
  const navigate = useNavigate()
  function createProject(e) {
    e.preventDefault()
    // console.log({
    //   status,
    //   description,
    //   name,
    //   clientId,
    // })
    addProject(name, description, status, clientId)
    navigate('/projects')
  }

  // load clients here
  return (
    <Container>
      <Form onSubmit={createProject}>
        <Form.Group className='mb-3'>
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type='text'
            placeholder="Enter Project's Name"
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            type='text'
            placeholder='Project Description'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Project Status</Form.Label>
          <Form.Select
            size='sm'
            defaultValue={enumStatus.new}
            onSelect={(e) => setStatus(e.target.value)}
            onChange={(e) => setStatus(e.target.value)}>
            {Object.keys(enumStatus).map((item) => (
              <option value={item} key={item}>
                {enumStatus[item]}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Client</Form.Label>
          <Form.Select
            size='sm'
            onSelect={(e) => setClient(e.target.value)}
            onChange={(e) => setClient(e.target.value)}
            required>
            {!loading &&
              !error &&
              data.clients.map((client) => (
                <option value={client.id} key={client.id}>
                  {client.name}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Create Project
        </Button>
      </Form>
    </Container>
  )
}

export default CreateProject
