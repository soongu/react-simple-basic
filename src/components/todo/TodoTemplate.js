import React, {Children, cloneElement} from 'react';
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const TodoTemplate = ({todos}) => {

    return (
        <div className="TodoTemplate">
            <TodoHeader />
            <TodoList todos={todos} />
            <TodoInput />
        </div>
    );
};


export default TodoTemplate;