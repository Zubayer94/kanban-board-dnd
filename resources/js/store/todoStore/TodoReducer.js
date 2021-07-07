export const TodoReducer = (todos, action) => {
    switch (action.type) {
        case 'initializeTodos':
            return action.todos

        case 'todoAdded':
            let oldTodos = {...todos} 

            oldTodos['todos'].items.splice(0, 0, action.todo);
            
            return oldTodos;

        case 'todoUpdated':
            const {destination, source} = action.payload 
            let tempTodos = {...todos} 

            // store source item temporarily
            let drggedTodo = {...todos[source.droppableId].items[source.index]}
            
            // first delete the source item 
            tempTodos[source.droppableId].items.splice(source.index, 1);

            // then add the temporary source item to the destination item and return state
            tempTodos[destination.droppableId].items.splice(destination.index, 0, drggedTodo);
            return tempTodos;

        default:
            return todos;
    }
}
