import React from 'react';
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const TodoTemplate = ({todos, handlers}) => {

    const {onInsert, onRemove, onToggle} = handlers;

    return (
        <div className="TodoTemplate">
            <TodoHeader todos={todos} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            <TodoInput onInsert={onInsert} />
        </div>
    );
};


export default TodoTemplate;