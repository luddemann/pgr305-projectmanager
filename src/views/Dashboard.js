import React from 'react'
import { useEmployeeContext } from '../context/EmployeeProvider'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import EmployeesImg from '../images/employees.jpg'
import ProjectsImg from '../images/projects.jpg'
import CustomersImg from '../images/customers.jpg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { employees } = useEmployeeContext()

  return (
    <CardDeck className='mt-3'>
      <Card>
        <Card.Img variant='top' src={ProjectsImg} />
        <Card.Body>
          <Card.Title>Projects</Card.Title>
          <Button as={Link} to='/projects' variant='primary'>
            Go to projects
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant='top' src={EmployeesImg} />
        <Card.Body>
          <Card.Title>Employees</Card.Title>
          <Card.Text>{employees.length}</Card.Text>
          <Button as={Link} to='/employees' variant='primary'>
            Go to employees
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant='top' src={CustomersImg} />
        <Card.Body>
          <Card.Title>Customers</Card.Title>
          <Card.Text>4</Card.Text>
          <Button as={Link} to='/customers' variant='primary'>
            Go to customers
          </Button>
        </Card.Body>
      </Card>
    </CardDeck>
  )
}

export default Dashboard
