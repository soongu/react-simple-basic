import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {MdAdd} from "react-icons/md";
import './scss/TodoInput.scss';
import cn from 'classnames';

const TodoInput = props => {

    const [open, setOpen] = useState(false);

    const onToggle = () => setOpen(!open);

    return (
        <>
            {open && (
                <div className='form-wrapper'>
                    <form className='insert-form'>
                        <input
                            type="text"
                            autoFocus
                            placeholder='할 일을 입력 후, 엔터를 누르세요!'
                        />
                    </form>
                </div>
            )}
            <button className={cn('del-btn', {open})} onClick={onToggle}>
                <MdAdd/>
            </button>
        </>
    );
};

TodoInput.propTypes = {};

export default TodoInput;