import React from 'react';
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const TodoTemplate = ({
                          inputValue,
                          todos,
                          onChangeInput,
                          onInsert,
                          onToggle,
                          onRemove
                      }) => {

    return (
        <div className="TodoTemplate">
            <TodoHeader todos={todos}/>
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
            <TodoInput inputValue={inputValue} onInsert={onInsert} onChangeInput={onChangeInput}/>
        </div>
    );
};


export default TodoTemplate;