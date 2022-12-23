import React from 'react';
import PropTypes from 'prop-types';
import './scss/TodoItem.scss';
import {MdDone, MdDelete} from "react-icons/md";
import cn from 'classnames';

const TodoItem = ({ id, done, text }) => {
    return (
        <li className='todo-list-item'>
            <div className={cn('check-circle', {active: done})}>{done && <MdDone />}</div>
            <span className={cn('text', {finish: done})}>{text}</span>
            <div className='remove'><MdDelete/></div>
        </li>
    );
};

TodoItem.propTypes = {

};

export default TodoItem;