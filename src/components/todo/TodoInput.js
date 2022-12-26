import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";
import './scss/TodoInput.scss';
import cn from 'classnames';

const TodoInput = ({ inputValue, onInsert, onChangeInput }) => {

    // const {state, actions} = useContext(TodoContext);

    const [open, setOpen] = useState(false);


    // 할일 입력창 토글 이벤트
    const onToggleOpen = () => setOpen(!open);

    const onChange = e => {
        onChangeInput(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        onInsert(inputValue);
        onChangeInput("");
    };


    return (
        <>
            {open &&
            <div className='form-wrapper'>
                <form className='insert-form' onSubmit={onSubmit}>
                    <input
                        type="text"
                        autoFocus
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                        value={inputValue}
                        onChange={onChange}
                    />
                </form>
            </div>}

            <button className={cn('del-btn', {open})} onClick={onToggleOpen}>
                <MdAdd/>
            </button>
        </>
    );
};


export default TodoInput;