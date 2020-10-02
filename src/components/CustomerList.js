import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const customers = [
  {
    id: 1,
    companyName: 'Statoil',
    companyDesc: 'Big bad oil company',
  },
  {
    id: 2,
    companyName: 'Gjensidige',
    companyDesc: 'Insurance company',
  },
  {
    id: 3,
    companyName: 'Vy',
    companyDesc: 'Big company specializing in transport',
  },
  {
    id: 4,
    companyName: 'Hafslund',
    companyDesc: 'Power company',
  },
]

const CustomerList = () => {
  return (
    <CardDeck>
      {customers.map((customer) => (
        <Card key={customer.id}>
          <Card.Body>
            <Card.Title> {customer.companyName} </Card.Title>
            <hr />
            <Card.Text> {customer.companyDesc} </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardDeck>
  )
}

export default CustomerList
