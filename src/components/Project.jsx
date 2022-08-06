import { Badge } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

function Project({ project }) {
  //   console.log(project.client)
  return (
    <Card style={{}} className='mb-5'>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {project.status === 'In Progress' ? (
            <Badge bg='warning'>In Progress</Badge>
          ) : project.status === 'Not Started' ? (
            <Badge bg='danger'>Not Started</Badge>
          ) : (
            <Badge bg='info'>Completed</Badge>
          )}
        </Card.Subtitle>
        <Card.Text>{project.description}</Card.Text>
        {/* {/* <Card.Link href='#'>Card Link</Card.Link> */}
      </Card.Body>
      <Card.Footer>
        <Card.Link
          href={project.client ? `/projects/${project.id}` : '/'}
          className='text-decoration-none'>
          View
        </Card.Link>
      </Card.Footer>
    </Card>
  )
}

export default Project
