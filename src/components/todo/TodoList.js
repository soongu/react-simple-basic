import React, {useContext} from 'react';
import TodoItem from "./TodoItem";
import './scss/TodoList.scss';
import TodoContext from "../../context/todo";

const TodoList = () => {


    const {state, actions} = useContext(TodoContext);
    // console.log(todos);

    return (
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
    );
};


export default TodoList;