import { useQuery } from '@apollo/client'
import React from 'react'
import { Badge, Button, Card, Container, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { GET_PROJECT } from '../apollo/queries/project.queries'
import { GoArrowLeft } from 'react-icons/go'
const ProjectView = () => {
  let params = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
  })
  console.log(params.id)
  //   console.log(data.project)
  if (loading) return <Spinner as='span' />
  if (error) return <p>Error occured</p>
  if (!loading && !error) {
    return (
      <Container>
        <Link to='/' className='btn btn-primary'>
          <GoArrowLeft className='mr-4' style={{ fontSize: '2rem' }} />
          Home
        </Link>
        <Card className='mt-5'>
          <Card.Header as='h2'>{data.project.name}</Card.Header>
          <Card.Body>
            <Card.Title>
              Project Status :
              <small>
                {data.project.status === 'In Progress' ? (
                  <Badge bg='warning'> In Progress</Badge>
                ) : data.project.status === 'Not Started' ? (
                  <Badge bg='danger'>Not Started</Badge>
                ) : (
                  <Badge bg='info'> Completed</Badge>
                )}
              </small>
            </Card.Title>
            <Card.Text>{data.project.description}</Card.Text>
            <Card.Text as='h4'>Client Details</Card.Text>
            <h6>Client Name: {data.project.client.name}</h6>
            <p>
              Email :<i>{data.project.client.email}</i>
            </p>
            <p>
              Phone :<i>{data.project.client.phone}</i>
            </p>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default ProjectView
