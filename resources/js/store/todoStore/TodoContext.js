import axios from 'axios'
import React, { createContext, useReducer, useEffect } from 'react'
import { TodoReducer } from './TodoReducer'
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    const [todos, dispatch] = useReducer(TodoReducer, [])

    const notyf = new Notyf({
        duration: 3000,
        dismissible: true,
        position: {
            x: "right",
            y: "top",
        },
    })

    useEffect(async() => {
        await axios.get('todos')
        .then(response => {
            dispatch({type: 'initializeTodos', todos: response.data.data})
        })
        .catch(error => console.log(error))
    }, [])

    const addTodo = async(todo) => {
        await axios.post(`todos`, {title: todo})
        .then(({data}) => {
            dispatch({type: 'todoAdded', todo: data.todo})
            notyf.success("Added!")
        })
        .catch(error => {
            notyf.error("Failed!");
            console.log(error)
        })
    }

    const handleUpdate = async(destination, source, todoId) => {
        dispatch({type: 'todoUpdated', payload: {destination, source}})

        await axios.put(`updateTodo/${todoId}`, {updateType: destination.droppableId})
        .then( _ => notyf.success("Success!"))
        .catch(error => {
            notyf.error("Failed!");
            console.log(error)
        })
    }
    
    return (
        <TodoContext.Provider value={{ todos, dispatch, addTodo, handleUpdate}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
