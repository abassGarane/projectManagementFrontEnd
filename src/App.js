import React, { useState } from 'react'
import Navigation from './components/Navigation'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Client } from './apollo/setup'
import Home from './pages/Home'
import ProjectView from './pages/ProjectView'
import NotFound from './pages/NotFound'
import Projects from './components/Projects'
import CreateProject from './components/CreateProject'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ApolloProvider client={Client}>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/projects/new' element={<CreateProject />} />
            <Route path='/projects/:id/' element={<ProjectView />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
