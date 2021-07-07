import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = ({element, index}) => {
    return (
        <Draggable key={element.id} draggableId={element.uuid} index={index}>
        {(provided, snapshot) => (
            <div
                className="item"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <h5>{element.title}</h5>
            </div>
        )}
        </Draggable>
    )
}

export default TodoItem
