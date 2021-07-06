import axios from 'axios'
import React, { createContext, useReducer, useEffect } from 'react'
import { TodoReducer } from './TodoReducer'

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    const [todos, dispatch] = useReducer(TodoReducer, [])

    useEffect(async() => {
        await axios.get('todos')
        .then(response => {
            dispatch({type: 'initializeTodos', todos: response.data.data})
        })
        .catch(error => console.log(error))
    }, [])
    
    return (
        <TodoContext.Provider value={{ todos, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
