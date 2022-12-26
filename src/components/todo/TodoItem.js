import React from 'react';
import './scss/TodoItem.scss';
import {MdDone, MdDelete} from "react-icons/md";
import cn from 'classnames';

const TodoItem = ({todo, onRemove, onToggle}) => {
    // console.log('item: ', todo);
    const {id, text, done} = todo;
    return (
        <li className='todo-list-item' data-id={id}>
            <div className={cn('check-circle', {active: done})} onClick={() => onToggle(id)}>{done && <MdDone />}</div>
            <span className={cn('text', {finish: done})}>{text}</span>
            <div className='remove' onClick={() => onRemove(id)}><MdDelete/></div>
        </li>
    );
};


export default TodoItem;