import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useEmployeeContext } from '../context/EmployeeProvider'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const projects = [
  {
    id: 1,
    title: 'Test title',
    status: 'Under development',
    assignedEmployees: [2],
    client: 1,
  },
  {
    id: 2,
    title: 'Test title 2',
    status: 'Completed',
    assignedEmployees: [1],
  },
  {
    id: 3,
    title: 'Test title 3',
    status: 'Not started',
    assignedEmployees: [1],
  },
]

const ProjectList = () => {
  const { employees } = useEmployeeContext()
  const [list, setList] = useState(projects)
  const [clickedItem, setClickedItem] = useState([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleOpen = (id) => {
    handleSetClickedItem(id)
    setShow(true)
  }

  const handleSetClickedItem = (id) => {
    setClickedItem(list.filter((project) => project.id === id))
  }

  const renderedResult = clickedItem.map((item) => {
    return (
      <div key={item.id}>
        <Modal.Header>
          <Modal.Title style={{ display: 'flex', flexDirection: 'row' }}>
            Project:
            <Form.Control
              type='text'
              defaultValue={item.title}
              className='ml-2'
            ></Form.Control>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form></Form>

          {/* TODO: Add form */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </div>
    )
  })

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Assigned</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.title}</td>
              <td>{project.status}</td>
              <td>{project.assignedEmployees}</td>
              <td>
                <Button
                  variant='primary'
                  onClick={() => handleOpen(project.id)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className='mt-5'>Add new project</h4>
      <hr />
      <Form>
        <Form.Row className='mb-4'>
          <Col xs={7}>
            <Form.Label>Project title</Form.Label>
            <Form.Control type='text' placeholder='Enter project title' />
          </Col>
        </Form.Row>
        <Form.Group controlId='exampleForm.ControlSelect1' className='mb-4'>
          <Form.Label>Add employees</Form.Label>
          <Form.Row className='ml-1'>
            {employees.map((employee) => (
              <div key={employee.id} className='mr-3'>
                <p style={{ fontWeight: 'bold' }} className='m-0'>
                  {employee.name}
                </p>
                <p> {employee.profession} </p>
                <Button variant='secondary' className='m-0'>
                  +
                </Button>
              </div>
            ))}
          </Form.Row>
        </Form.Group>
        <Button variant='primary' className='mt-2'>
          Add project
        </Button>
      </Form>

      <Modal show={show}>{renderedResult}</Modal>
    </>
  )
}

export default ProjectList
