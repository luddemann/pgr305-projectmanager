import React from 'react'
import Image from 'react-bootstrap/Image'

import Col from 'react-bootstrap/Col'
import faker from 'faker'
import PropTypes from 'prop-types'

const img = faker.image.avatar()

const EmployeeItem = ({ item }) => (
  <Col style={{ textAlign: 'center' }}>
    <Image src={img} roundedCircle />
    <div>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{item.name}</div>
      <div style={{ opacity: 0.7 }}>{item.profession}</div>
    </div>
  </Col>
)

export default EmployeeItem

EmployeeItem.defaultProps = {
  item: PropTypes.shape({
    name: PropTypes.string,
    profession: PropTypes.string,
  }),
}
