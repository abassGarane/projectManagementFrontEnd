import { useQuery } from '@apollo/client'
import React from 'react'
import { Badge, Button, Card, Container, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { GET_PROJECT } from '../apollo/queries/project.queries'
import { GoArrowLeft } from 'react-icons/go'
import ClientInfo from '../components/ClientInfo'
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
        <Link to='/' className='btn-primary text-decoration-none'>
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
            <ClientInfo client={data.project.client} />
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default ProjectView
