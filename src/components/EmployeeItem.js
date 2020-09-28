import React from 'react'
import Image from 'react-bootstrap/Image'

import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'

import Avatar1 from '../images/boy-1.svg'
import Avatar2 from '../images/boy.svg'
import Avatar3 from '../images/girl-1.svg'
import Avatar4 from '../images/girl.svg'
import Avatar5 from '../images/man-1.svg'
import Avatar6 from '../images/man-2.svg'

const imgArray = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6]
const getRandomAvatar = () =>
  imgArray[Math.floor(Math.random() * imgArray.length)]

const EmployeeItem = ({ employee }) => {
  return (
    <Col style={{ textAlign: 'center' }}>
      <Image src={getRandomAvatar()} roundedCircle />
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
  }),
}
