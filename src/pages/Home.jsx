import React from 'react'
import CreateClient from '../components/CreateClient'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import { Container } from 'react-bootstrap'
const Home = () => {
  return (
    <Container>
      <CreateClient />
      <Projects />
      <Clients />
    </Container>
  )
}

export default Home
