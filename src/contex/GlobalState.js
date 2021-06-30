import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
const initialState = {
    users: []
}
//create contex
export const GlobalContex = createContext(initialState)

//provider contex
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    //actions
    //remove user
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    //add user
    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }
    //edit user
    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }
    return (
        <GlobalContex.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContex.Provider>
    )
}
