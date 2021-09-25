
import React from 'react'
import { Card,Button } from 'react-bootstrap'
import  "./UserCard.css"
import {Link} from 'react-router-dom'

const UserCard = ({user}) => {
    return (
        <Card style={{ width: '18rem' }} className="m-3"  >
            <div className="avatar mx-auto my-3">{user.name[0]}</div>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
           {user.email}
          </Card.Text>
          <Link to={`/users/${user.id}`}><Button variant="primary">Go somewhere</Button></Link>
        </Card.Body>
      </Card>
    )
}

export default UserCard
