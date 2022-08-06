import React, { useState } from 'react'
import Navigation from './components/Navigation'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Client } from './apollo/setup'
import Home from './pages/Home'
import ProjectView from './pages/ProjectView'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <ApolloProvider client={Client}>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/:id' element={<ProjectView />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
