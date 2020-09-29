import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

const projects = [
  {
    id: 1,
    title: 'Test title',
    description: 'Test desc',
    status: 'Under development',
    assignedEmployees: [1, 2],
    client: 1,
  },
  {
    id: 2,
    title: 'Test title 2',
    status: 'Completed',
    assignedEmployees: [1],
  },
]

const ProjectList = () => {
  const [list, setList] = useState(projects)
  const [clickedItem, setClickedItem] = useState([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleOpen = (id) => {
    handleSetClickedItem(id)
    setShow(true)
  }

  const handleSetClickedItem = (id) => {
    const item = list.filter((project) => project.id === id)
    clickedItem.push(item)
  }

  const renderedResult = clickedItem.map((item) => {
    item = item[0]
    return (
      <div key='1'>
        <Modal.Header>
          <Modal.Title>Project "{item.title}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {item.description}
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

      <Modal show={show}>{renderedResult}</Modal>
    </>
  )
}

export default ProjectList
