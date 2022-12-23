import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import './scss/TodoList.scss';

const TodoList = props => {
    return (
        <ul className='todo-list'>
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="컴포넌트 스타일링 하기" done={true} />
            <TodoItem text="Context 만들기" done={false} />
            <TodoItem text="기능 구현하기" done={false} />
        </ul>
    );
};

TodoList.propTypes = {

};

export default TodoList;