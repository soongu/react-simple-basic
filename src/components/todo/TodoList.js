import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import './scss/TodoList.scss';

const TodoList = ({todos}) => {

    // console.log(todos);

    return (
        <ul className='todo-list'>
            {
                todos.length !== 0 &&
                    todos.map(todo => <TodoItem key={todo.id} text={todo.text} done={true} />)
            }
        </ul>
    );
};

TodoList.propTypes = {

};

export default TodoList;