import React from 'react';
import './scss/TodoHeader.scss';
import {TodoConsumer} from "../../context/todo";


const TodoHeader = () => {

    // const undoneTasks = (todos) => todos.filter(todo => !todo.done);

    const countUndoneTasks = (todos) => todos.filter(todo => !todo.done).length;

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <TodoConsumer>
            {
                ({state}) => (
                    <header>
                        <h1>{dateString}</h1>
                        <div className="day">{dayName}</div>
                        <div className="tasks-left">할 일 {countUndoneTasks(state.todos)}개 남음</div>
                    </header>
                )
            }

        </TodoConsumer>
    );
};


export default TodoHeader;