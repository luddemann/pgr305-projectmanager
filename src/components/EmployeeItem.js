import React from 'react'
import Image from 'react-bootstrap/Image'

import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'

const EmployeeItem = ({ employee }) => {
  return (
    <Col style={{ textAlign: 'center' }}>
      <Image src={employee.imageUrl} roundedCircle />
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
          {employee.name}
        </div>
        <div style={{ opacity: 0.7 }}>{employee.profession}</div>
      </div>
    </Col>
  )
}

export default EmployeeItem

EmployeeItem.defaultProps = {
  item: PropTypes.shape({
    name: PropTypes.string,
    profession: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
}
