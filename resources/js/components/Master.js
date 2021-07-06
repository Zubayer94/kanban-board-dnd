import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todo/Todos';
import TodoContextProvider from '../store/todoStore/TodoContext'

function Master() {
    return (
        <TodoContextProvider> 
            <Todos />
        </TodoContextProvider>
    );
}

export default Master;

if (document.getElementById('app')) {
    ReactDOM.render(<Master />, document.getElementById('app'));
}
