import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const CreateProject = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('Not Started')
  const [client, setClient] = useState(null)

  //Enum for status in js
  const enumStatus = Object.freeze({
    new: 'Not Started',
    progress: 'In Progress',
    completed: 'Completed',
  })

  // load clients here
  return (
    <Container>
      <Form>
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
            type='text'
            placeholder='Project Description'
            name='description'
            value={description}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Project Status</Form.Label>
          {Object.keys(enumStatus).map((item, index) => (
            <Form.Select
              label={item}
              type='radio'
              id={index}
              name='status'
              value='status'
              onChange={(e) => setStatus(e.target.value)}
            />
          ))}
        </Form.Group>
        <Button variant='primary' type='submit'>
          Create Project
        </Button>
      </Form>
    </Container>
  )
}

export default CreateProject
