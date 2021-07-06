export const TodoReducer = (todos, action) => {
    switch (action.type) {
        case 'initializeTodos':
            return action.todos

        case 'todoAdded':
            return [{ ...action.todo}, ...todos]

        case 'updatedInTodo':
            return todos.map(todo => {
                if (todo.title == 'Todos') {
                    return todo.items.map(item => {
                        if (item.id == action.todo.id) {
                            item.in_progress = 0;
                            item.is_completed = 0;
                            
                        }
                        return item;
                    })
                }
            })

        case 'updateToInProgress':
            return todos.map(todo => {
                if (todo.title == 'In Progress') {
                    return todo.items.map(item => {
                        if (item.id == action.todo.id) {
                            item.in_progress = 1;
                            item.is_completed = 0;
                            
                        }
                        return item;
                    })
                }
            })

        case 'updateToDone':
            return todos.map(todo => {
                if (todo.title == 'Completed') {
                    return todo.items.map(item => {
                        if (item.id == action.todo.id) {
                            item.in_progress = 1;
                            item.is_completed = 1;
                            
                        }
                        return item;
                    })
                }
            })

        default:
            break;
    }
}
