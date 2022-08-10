import { useQuery } from '@apollo/client'
import React from 'react'
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap'
import { GET_PROJECTS } from '../apollo/queries/project.queries'
import Project from './Project'

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS)
  if (loading) return <Spinner as='span' />
  if (error) return <p>Error occured</p>
  if (!loading && !error) {
    return (
      <>
        {data.projects.length > 0 ? (
          <Row className='m-5'>
            <h2>Projects</h2>
            {data.projects.map((project) => (
              <Col md={6} key={project.id}>
                <Project project={project} />
              </Col>
            ))}
          </Row>
        ) : (
          <p>No projects </p>
        )}
      </>
    )
  }
}

export default Projects
