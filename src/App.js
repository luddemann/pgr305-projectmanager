import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Avatar from './images/profile-avatar.svg'
import './styles.css'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Employees from './components/Employees'
import Customers from './components/Customers'

export default () => {
  return (
    <Router>
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
        <nav>
          <ul style={{ margin: 0, padding: 0 }}>
            <Link to='/'>Dashboard</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/employees'>Employees</Link>
            <Link to='/customers'>Customers</Link>
          </ul>
        </nav>
        <hr style={{ margin: 0 }} />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/projects' component={Projects} />
          <Route path='/employees' component={Employees} />
          <Route path='/customers' component={Customers} />
        </Switch>
      </Container>
    </Router>
  )
}
