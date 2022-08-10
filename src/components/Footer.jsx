import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer
      className='page-footer font-small blue'
      as='footer'
      style={{
        position: 'fixed',
        bottom: '0',
        textAlign: 'center',
        backgroundColor: '#ededed',
        width: '100vw',
      }}>
      <h6 className='footer-copyright'>&copy;2022 Abass Garane</h6>
    </footer>
  )
}

export default Footer
