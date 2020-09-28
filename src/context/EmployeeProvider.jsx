import React, { useContext, useState } from 'react'

const EmployeeContext = React.createContext(null)

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John',
      profession: 'Interaction designer',
    },
    {
      id: 2,
      name: 'Sarah',
      profession: 'Backend developer',
    },
  ])

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext)

  if (!context) {
    throw new Error('Missing provider for EmployeeContext!')
  }

  return context
}

export default EmployeeProvider
