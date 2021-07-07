import React, {useContext, useState} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash'
import './todo.css'
import { TodoContext } from '../../store/todoStore/TodoContext'
import TodoItem from './TodoItem';

const Todos = () => {
    const [todo, setTodo] = useState('')
    const {todos, addTodo, handleUpdate} = useContext(TodoContext)

    const handleDragDrop = ({destination, source}) => {
        if( !destination ){
            return
        }
        if( destination.droppableId === source.droppableId && destination.index === source.index){
            return
        }
        let todoId = todos[source.droppableId].items[source.index].id
        handleUpdate(destination, source, todoId)
    }

    const handleAddingTodo = () => {
        addTodo(todo)
        .then(_ => setTodo(''))
    }

    return (
        <>
            <div className="inputForm">
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button onClick={handleAddingTodo}>Add</button>
            </div>
        
            <div className="container">


                <DragDropContext onDragEnd={handleDragDrop}>
                    {
                        _.map(todos, (data, key) => {
                            return (
                                <div key={key} className="column" >
                                    <div className="col-head">
                                        <h5> <b>{data.title}</b></h5>
                                    </div>
                                    <Droppable droppableId={key} >
                                        {(provided, snapshot) => (
                                            <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className="droppable-col"
                                            style={{ backgroundColor: snapshot.isDraggingOver ? 'darkorange' : null }}
                                            >
                                                {
                                                    data.items?.map((element, index) => 
                                                        <TodoItem key={index} element={element} index={index} />
                                                    )
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            )
                        })
                    }
                </DragDropContext>
            </div>
        </>
    )
}

export default Todos
