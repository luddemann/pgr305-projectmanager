import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useEmployeeContext } from '../context/EmployeeProvider'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
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
      title: 'Website for Vy',
      status: 'Under development',
      assignedEmployees: ['John', 'Sarah'],
      client: 1,
    },
    {
      id: 2,
      title: 'App for Statoil',
      status: 'Completed',
      assignedEmployees: ['John'],
    },
    {
      id: 3,
      title: 'Update database',
      status: 'Not started',
      assignedEmployees: ['Sarah'],
    },
  ])
  const [clickedProjectTitle, setClickedProjectTitle] = useState('')
  const [clickedProjectStatus, setClickedProjectStatus] = useState('')
  // not implemented yet
  // const [clickedProjectEmployee, setClickedProjectEmployee] = useState('')

  const handleProjectTitle = (e) => setProjectTitle(e.target.value)

  const handleClickedProjectTitle = (e) =>
    setClickedProjectTitle(e.target.value)
  const handleClickedProjectStatus = (e) =>
    setClickedProjectStatus(e.target.value)
  // not implemented  yet
  // const handleClickedProjectEmployee = (e) => setClickedProjectEmployee(e.target.value)

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
      alert('Enter project title')
    } else {
      setProjects([
        ...projects,
        {
          id: getRandomId(),
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

  const handleUpdateProject = () => {
    const projectIndex = projects.findIndex(
      (element) => element.id === clickedItem.id
    )
    let newArray = [...projects]

    if (clickedProjectTitle !== '') {
      newArray[projectIndex] = {
        ...newArray[projectIndex],
        title: clickedProjectTitle,
      }
    }
    if (clickedProjectStatus !== '') {
      newArray[projectIndex] = {
        ...newArray[projectIndex],
        status: clickedProjectStatus,
      }
    }
    if (clickedProjectTitle !== '' && clickedProjectStatus !== '') {
      newArray[projectIndex] = {
        ...newArray[projectIndex],
        title: clickedProjectTitle,
        status: clickedProjectStatus,
      }
    }

    setProjects(newArray)
    setShow(false)
  }

  const deleteProject = (id) => {
    const projectIndex = projects.findIndex((element) => element.id === id)

    let newArray = [...projects]
    newArray.splice(projectIndex, 1)

    setProjects(newArray)
  }

  const renderedModalForm = clickedItem && (
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
              onChange={handleClickedProjectTitle}
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Status</Form.Label>
            <Form.Control
              as='select'
              defaultValue={clickedItem.status}
              onChange={handleClickedProjectStatus}
            >
              {projectStatuses.map((status) => (
                <option key={status.title}>{status.title}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect2'>
            <Form.Label>Employees assigned</Form.Label>
            <div>
              {clickedItem.assignedEmployees.map((employee) => (
                <option key={employee}>{employee}</option>
              ))}
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' type='submit' onClick={handleUpdateProject}>
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
            <th>Delete</th>
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
                <td>
                  <Button
                    variant='danger'
                    onClick={() => deleteProject(project.id)}
                  >
                    Delete
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
        {renderedModalForm}
      </Modal>
    </>
  )
}

export default ProjectList
