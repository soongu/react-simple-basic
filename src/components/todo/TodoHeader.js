import React from 'react';
import PropTypes from 'prop-types';
import './scss/TodoHeader.scss';


const TodoHeader = props => {
    return (
        <header>
            <h1>2022년 12월 23일</h1>
            <div className="day">금요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </header>
    );
};

TodoHeader.propTypes = {

};

export default TodoHeader;