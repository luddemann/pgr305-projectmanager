import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import EmployeeItem from './EmployeeItem'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { useEmployeeContext } from '../context/EmployeeProvider'

const EmployeeList = () => {
  const [name, setName] = useState('')
  const [profession, setProfession] = useState('')
  const { employees, setEmployees } = useEmployeeContext()

  const handleSetName = (e) => {
    setName(e.target.value)
  }

  const handleSetProfession = (e) => {
    setProfession(e.target.value)
  }

  const handleAdd = () => {
    if (name && profession) {
      setEmployees([...employees, { name, profession, id: uuidv4() }])

      setName('')
      setProfession('')
    } else {
      alert('Enter both name and profession :)')
    }
  }

  return (
    <div>
      <Row xs={2} md={4} lg={6} className='mb-5'>
        {employees.map((employee) => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </Row>

      <h3>Add employee</h3>
      <Form>
        <Form.Row>
          <Col xs={7}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={handleSetName}
              type='text'
              placeholder='Enter Name'
            />
          </Col>
        </Form.Row>
        <Form.Row controlId='exampleForm.ControlSelect1' className='mt-2'>
          <Col xs={7}>
            <Form.Label>Profession</Form.Label>
            <Form.Control
              as='select'
              value={profession}
              onChange={handleSetProfession}
            >
              <option value='' disabled selected>
                Select profession
              </option>
              <option value='Frontend developer'>Frontend developer</option>
              <option value='Backend developer'>Backend developer</option>
              <option value='Interaction designer'>Interaction designer</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Button variant='primary' className='mt-2' onClick={handleAdd}>
          Add employee
        </Button>
      </Form>
    </div>
  )
}

export default EmployeeList
