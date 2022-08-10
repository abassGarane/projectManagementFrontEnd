import { useQuery } from '@apollo/client'
import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { GET_PROJECTS } from '../apollo/queries/project.queries'
import Project from './Project'

const Projects = () => {
  const loc = useLocation()
  // console.log(loc)
  const { loading, error, data } = useQuery(GET_PROJECTS)
  if (loading) return <Spinner as='span' />
  if (error) return <p>Error occured</p>
  if (!loading && !error) {
    return (
      <>
        {loc.pathname === '/projects' && (
          <Link
            to='/projects/new'
            className='btn btn-primary'
            style={{
              textDecoration: 'none',
              marginTop: '2rem',
              marginLeft: '4rem',
            }}>
            Add project
          </Link>
        )}
        {data.projects.length > 0 ? (
          <Row className='m-5'>
            <h2>Projects</h2>
            {data.projects.map((project) => (
              <Col md={4} key={project.id}>
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
