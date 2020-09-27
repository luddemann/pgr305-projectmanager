import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch,
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Avatar from './images/profile-avatar.svg'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Dashboard from './views/Dashboard'
import Projects from './views/Projects'
import Employees from './views/Employees'
import Customers from './views/Customers'

export default () => {
  return (
    <Router>
      <Container>
        <Row className='mt-3 mb-3 ml-0'>
          <Image src={Avatar} width='80' />
          <div className='ml-3 mt-3'>
            <h1
              style={{
                marginBottom: '0px',
                fontFamily: 'Montserrat',
                fontWeight: '800',
              }}
            >
              Roger Federer
            </h1>
            <p style={{ opacity: 0.7 }}>Project Manager</p>
          </div>
        </Row>

        <Navbar>
          <Nav>
            <Nav.Link as={NavLink} to='/'>
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to='/projects'>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to='/employees'>
              Employees
            </Nav.Link>
            <Nav.Link as={NavLink} to='/customers'>
              Customers
            </Nav.Link>
          </Nav>
        </Navbar>
        <hr className='m-0' />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/projects' component={Projects} />
          <Route path='/employees' component={Employees} />
          <Route path='/customers' component={Customers} />
        </Switch>
      </Container>
    </Router>
  )
}
