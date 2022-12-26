import React from 'react';
import TodoItem from "./TodoItem";
import './scss/TodoList.scss';
import {TodoConsumer} from "../../context/todo";

const TodoList = () => {

    // console.log(todos);

    return (
        <TodoConsumer>
            {
                ({state, actions}) => (
                    <ul className='todo-list'>
                        {
                            state.todos.length !== 0 &&
                            state.todos.map(todo =>
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onRemove={actions.handlers.onRemove}
                                    onToggle={actions.handlers.onToggle}
                                />)
                        }
                    </ul>
                )
            }

        </TodoConsumer>
    );
};


export default TodoList;