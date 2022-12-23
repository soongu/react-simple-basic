import React from 'react';
import './scss/TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">{children}</div>
    );
};


export default TodoTemplate;