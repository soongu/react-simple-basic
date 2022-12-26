import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";
import './scss/TodoInput.scss';
import cn from 'classnames';
import {TodoConsumer} from "../../context/todo";

const TodoInput = () => {

    const [open, setOpen] = useState(false);


    // 할일 입력창 토글 이벤트
    const onToggleOpen = () => setOpen(!open);



    return (
            <TodoConsumer>
                {
                    ({state, actions}) => (
                        <>
                            {open &&
                                <div className='form-wrapper'>
                                    <form className='insert-form' onSubmit={actions.handlers.onSubmit}>
                                        <input
                                            type="text"
                                            autoFocus
                                            placeholder='할 일을 입력 후, 엔터를 누르세요!'
                                            value={state.value}
                                            onChange={actions.handlers.onChange}
                                        />
                                    </form>
                                </div>}

                            {<button className={cn('del-btn', {open})} onClick={onToggleOpen}>
                                <MdAdd/>
                            </button>}
                        </>
                    )
                }
            </TodoConsumer>
    );
};

TodoInput.propTypes = {};

export default TodoInput;