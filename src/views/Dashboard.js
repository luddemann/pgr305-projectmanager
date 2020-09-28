import React from 'react'
import { useEmployeeContext } from '../context/EmployeeProvider'

const Dashboard = () => {
  const { employees } = useEmployeeContext()

  return (
    <div>
      <h3>Employees</h3>
      <p>{employees.length}</p>
    </div>
  )
}

export default Dashboard
