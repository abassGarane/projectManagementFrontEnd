import React from 'react'
import { Container } from 'react-bootstrap'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container className='d-flex items-center mt-5 flex-column'>
      <FaExclamationTriangle size='5rem' className='text-danger' />
      <h1>404</h1>
      <p className='lead'>Sorry, this page does not exist</p>
      <Link
        to='/'
        className='btn btn-primary btn-lg'
        style={{ width: '10rem' }}>
        Go Back
      </Link>
    </Container>
  )
}

export default NotFound
