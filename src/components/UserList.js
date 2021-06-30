import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { GlobalContex } from '../contex/GlobalState'
const UserList = () => {
    const { users, removeUser } = useContext(GlobalContex)
    return (
        <ListGroup className='mt-4'>
            {users.length > 0 ? (
                <div>
                    {users.map(user => (
                        <ListGroupItem className='d-flex' key={user.id}>
                            <strong>{user.name}</strong>
                            <div className='ml-auto'>
                                <Link to={`/edit/${user.id}`} className='btn btn-warning mr-2'>Edit</Link>
                                <Button onClick={() => removeUser(user.id)} color='danger'>Delete</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </div>
            ) : (
                <h4 className='text-center'>No users</h4>
            )}

        </ListGroup>
    )
}

export default UserList
