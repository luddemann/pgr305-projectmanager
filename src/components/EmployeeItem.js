import React from 'react'
import Image from 'react-bootstrap/Image'

import Col from 'react-bootstrap/Col'
import faker from 'faker'

let img = faker.image.avatar()

const EmployeeItem = ({ item }) => {
  return (
    <Col style={{ textAlign: 'center' }}>
      <Image src={img} roundedCircle />
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{item.name}</div>
        <div style={{ opacity: 0.7 }}>{item.profession}</div>
      </div>
    </Col>
  )
}

export default EmployeeItem
