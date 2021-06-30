import React, { useContext } from 'react'
import { GlobalContex } from '../contex/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react'
import { v4 as uid } from 'uuid'
const AddUser = () => {
    const [name, setName] = useState('')
    const { addUser } = useContext(GlobalContex)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            id: uid(),
            name
        }
        addUser(newUser)
        history.push('/')
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name'></Input>
                </FormGroup>
                <Button type='submit'>Submit</Button>
                <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
            </Form>
        </div>
    )
}

export default AddUser
