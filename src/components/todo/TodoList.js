import React from 'react';
import TodoItem from "./TodoItem";
import './scss/TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {

    // console.log(todos);

    return (
        <ul className='todo-list'>
            {
                todos.length !== 0 &&
                    todos.map(todo =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />)
            }
        </ul>
    );
};

TodoList.propTypes = {

};

export default TodoList;