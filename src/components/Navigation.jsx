import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CreateClient from './CreateClient'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Project Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/projects'>Projects</Nav.Link>
            <NavDropdown title='Actions' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/clients'>Add a Client</NavDropdown.Item>
              <NavDropdown.Item href='/projects/new'>
                Create Project
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
