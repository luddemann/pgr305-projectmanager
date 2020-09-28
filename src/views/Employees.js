import React from 'react'
import EmployeeList from '../components/EmployeeList'
import { useEmployeeContext } from '../context/EmployeeProvider'

const Employees = () => {
  const { employees } = useEmployeeContext()

  return (
    <div className='mt-5'>
      <h3>Employees ({employees.length}) </h3>
      <EmployeeList />
    </div>
  )
}

export default Employees
