import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Avatar from './images/profile-avatar.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './styles.css'

export default () => {
  return (
    <>
      <Container>
        <Row style={{ marginTop: '20px', marginLeft: 0 }}>
          <Image src={Avatar} width='80' />
          <div style={{ marginLeft: '20px', marginTop: '20px' }}>
            <h1
              style={{
                marginBottom: '0px',
                fontFamily: 'Montserrat',
                fontWeight: '800',
              }}
            >
              Rolando Gonzalez
            </h1>
            <p style={{ opacity: 0.7 }}>Project Manager</p>
          </div>
        </Row>
        <Navbar>
          <Nav className='m-0' style={{ padding: 0 }}>
            <Nav.Link style={{ margin: 0 }}>Dashboard</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Employees</Nav.Link>
            <Nav.Link>Customers</Nav.Link>
          </Nav>
        </Navbar>
        <hr style={{ margin: 0 }} />
      </Container>
    </>
  )
}
