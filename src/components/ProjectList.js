import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useEmployeeContext } from '../context/EmployeeProvider'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useParams } from 'react-router-dom'
import { getRandomId } from '../utils/utils'

const projectStatuses = [
  {
    title: 'Not started',
  },
  {
    title: 'Under development',
  },
  {
    title: 'Completed',
  },
]

const ProjectList = () => {
  const { employees } = useEmployeeContext()
  const [clickedItem, setClickedItem] = useState()
  const [show, setShow] = useState(false)
  const [projectTitle, setProjectTitle] = useState('')
  const [employeesOnProject, setEmployeesOnProject] = useState([])
  const [editProject, setEditProject] = useState()
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Test title',
      status: 'Under development',
      assignedEmployees: ['John', 'Sarah'],
      client: 1,
    },
    {
      id: 2,
      title: 'Test title 2',
      status: 'Completed',
      assignedEmployees: ['John'],
    },
    {
      id: 3,
      title: 'Test title 3',
      status: 'Not started',
      assignedEmployees: ['Sarah'],
    },
  ])

  const handleProjectTitle = (e) => setProjectTitle(e.target.value)

  const handleClose = () => setShow(false)
  const handleOpen = (id) => {
    handleSetClickedItem(id)
    setShow(true)
  }

  const handleEmployeesOnProject = (item) => {
    if (employeesOnProject.find((e) => e === item)) {
      alert(item + ' is already added to the project')
    } else {
      setEmployeesOnProject([...employeesOnProject, item])
    }
  }

  const deleteEmployeeFromProject = (item) =>
    setEmployeesOnProject([...employeesOnProject.filter((e) => e !== item)])

  const handleSetClickedItem = (id) =>
    setClickedItem(projects.find((project) => project.id === id))

  const addProject = () => {
    if (!projectTitle) {
      alert('Mangler tittel')
    } else {
      setProjects([
        ...projects,
        {
          id: getRandomId().toString().substring(0, 4),
          title: projectTitle,
          status: 'Not started',
          assignedEmployees: employeesOnProject,
        },
      ])
    }
  }

  useEffect(() => {
    if (clickedItem) {
      setEditProject(clickedItem)
    }
  }, [clickedItem])

  const handleEdit = (e, prop) => {
    console.log(projects) // får inn endrede elementer, trenger en funksjon for å sette editProject til project
    setEditProject({
      ...editProject,
      [prop]: e.target.value,
    })
  }

  // funksjonen som skal bytte prosjektet med de redigerte elementene
  /* const submit = (clickedItem.id) => {
    const projectToEdit = projects.find((p) => p.id === clickedItem.id)

    setProjects(...projects)
  } */

  // Kanskje bytte navn på denne
  const renderedResult = clickedItem && (
    <div key={clickedItem.id}>
      <Modal.Header>
        <Modal.Title style={{ display: 'flex', flexDirection: 'row' }}>
          Project: {clickedItem.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              defaultValue={clickedItem.title}
              onChange={(e) => handleEdit(e, 'title')}
              value={editProject?.title}
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Status</Form.Label>
            <Form.Control
              as='select'
              defaultValue={clickedItem.status}
              value={editProject?.status}
              onChange={(e) => handleEdit(e, 'status')}
            >
              {projectStatuses.map((status) => (
                <option key={status.title}>{status.title}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect2'>
            <Form.Label>Employees assigned</Form.Label>
            <Form.Control as='select' multiple>
              {clickedItem.assignedEmployees.map((employee) => (
                <option key={employee}>{employee}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' type='submit'>
          Save Changes
        </Button>
      </Modal.Footer>
    </div>
  )

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
          {projects.map((project) => {
            return (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td>{project.status}</td>
                <td>
                  {project.assignedEmployees.map((employee, index) =>
                    index === project.assignedEmployees.length - 1
                      ? `${employee} `
                      : `${employee}, `
                  )}
                </td>
                <td>
                  <Button
                    variant='primary'
                    onClick={() => handleOpen(project.id)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>

      <h4 className='mt-5'>Add new project</h4>
      <hr />
      <Form>
        <Form.Row className='mb-4'>
          <Col xs={7}>
            <Form.Label>Project title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter project title'
              value={projectTitle}
              onChange={handleProjectTitle}
            />
          </Col>
        </Form.Row>
        <Form.Group controlId='exampleForm.ControlSelect1' className='mb-4'>
          <Form.Label>Add employees</Form.Label>
          <Form.Row className='ml-1 mb-3'>
            {employees.map((employee) => (
              <div key={employee.id} className='mr-3'>
                <p style={{ fontWeight: 'bold' }} className='m-0'>
                  {employee.name}
                </p>
                <p> {employee.profession} </p>
                <Button
                  variant='success'
                  className='m-0'
                  onClick={() => handleEmployeesOnProject(employee.name)}
                >
                  Add
                </Button>
              </div>
            ))}
          </Form.Row>
          <p>Employees to be added:</p>
          {employeesOnProject?.map((employee) => (
            <div className='my-2' key={employee}>
              <span style={{ fontWeight: 'bold' }}>{employee}</span>
              <Button
                onClick={() => deleteEmployeeFromProject(employee)}
                className='ml-1'
                variant='danger'
              >
                x
              </Button>
            </div>
          ))}
        </Form.Group>
        <Button variant='primary' className='mt-2' onClick={addProject}>
          Add project
        </Button>
      </Form>

      <Modal onHide={handleClose} show={show}>
        {renderedResult}
      </Modal>
    </>
  )
}

export default ProjectList
