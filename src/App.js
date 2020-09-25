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
import Avatar from './images/profile-avatar.svg'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Employees from './components/Employees'
import Customers from './components/Customers'

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
        <Nav>
          <ul className='m-0 py-2 px-0'>
            <NavLink
              className='mr-4'
              style={{ color: '#333' }}
              activeStyle={{ color: '#5A67D8', fontWeight: 'bold' }}
              to='/dashboard'
            >
              Dashboard
            </NavLink>
            <NavLink
              className='mr-4'
              style={{ color: '#333' }}
              activeStyle={{ color: '#5A67D8', fontWeight: 'bold' }}
              to='/projects'
            >
              Projects
            </NavLink>
            <NavLink
              className='mr-4'
              style={{ color: '#333' }}
              activeStyle={{ color: '#5A67D8', fontWeight: 'bold' }}
              to='/employees'
            >
              Employees
            </NavLink>
            <NavLink
              style={{ color: '#333' }}
              activeStyle={{ color: '#5A67D8', fontWeight: 'bold' }}
              to='/customers'
            >
              Customers
            </NavLink>
          </ul>
        </Nav>
        <hr className='m-0' />
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/projects' component={Projects} />
          <Route path='/employees' component={Employees} />
          <Route path='/customers' component={Customers} />
        </Switch>
      </Container>
    </Router>
  )
}
