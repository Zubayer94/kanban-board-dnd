import React, {useContext} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash'
import './todo.css'
import { TodoContext } from '../../store/todoStore/TodoContext'

const Todos = () => {
    const {todos, dispatch} = useContext(TodoContext)

    return (
        <div className="container">
            <DragDropContext onDragEnd={e => console.log(e)}>
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
                                        // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                                        >
                                            {provided.placeholder}
                                        {
                                            data.items.map((el, index) => {
                                                return (
                                                    <Draggable key={el.id} draggableId={el.uuid} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            className="item"
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <h5>{el.title}</h5>
                                                        </div>
                                                    )}
                                                    </Draggable>
                                                )
                                            })
                                        }
                                    </div>
                                )}
                                </Droppable>
                            </div>
                        )
                    })
                }
            </DragDropContext>
        </div>
    )
}

export default Todos
