import React from 'react';
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import {TodoProvider} from "../../context/todo";

const TodoTemplate = () => {

    return (
        <div className="TodoTemplate">
            {/* TodoProvider를 통해 데이터를 전달한다. */}
            <TodoProvider>
                <TodoHeader/>
                <TodoList/>
                <TodoInput/>
            </TodoProvider>
        </div>
    );
};


export default TodoTemplate;