import React, {useContext} from 'react'
import './todo.css'
import { TodoContext } from '../../store/todoStore/TodoContext'

const Todos = () => {
    const {todos, dispatch} = useContext(TodoContext)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Todo Component</div>

                        <div className="card-body">I'm an todo component!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos
