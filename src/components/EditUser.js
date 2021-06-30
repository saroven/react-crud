import React, { useContext, useEffect } from 'react'
import { GlobalContex } from '../contex/GlobalState'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })
    const { users, editUser } = useContext(GlobalContex)
    const history = useHistory()
    const { id } = useParams()
    useEffect(() => {
        const userId = id
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [id, users])
    const handleSubmit = (e) => {
        e.preventDefault()
        editUser(selectedUser)
        history.push('/')
    }
    const handleChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input type='text' value={selectedUser.name} name='name' onChange={handleChange} placeholder='Enter Name'></Input>
                </FormGroup>
                <Button type='submit'>Edit Name</Button>
                <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
            </Form>
        </div>
    )
}

export default EditUser
