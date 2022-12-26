import React, {useCallback, useState} from 'react';
import {MdAdd} from "react-icons/md";
import './scss/TodoInput.scss';
import cn from 'classnames';

const TodoInput = ({onInsert}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    // 할일 입력창 토글 이벤트
    const onToggle = () => setOpen(!open);

    //해당 함수에서 state를 사용한다면, 말그대로 state에 의존하는 함수이므로 두번째 인자의 배열 안에 state를 추가해줘야 하고,
    // state에 의존적이지 않은 함수라면 빈 배열로 넣어주면 된다.

    const changeHandler = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const submitHandler = useCallback(e => {
        e.preventDefault();

        // console.log('val:', value);
        onInsert(value);
        setValue('');

    }, [value, onInsert]);


    return (
        <>
            {open && (
                <div className='form-wrapper'>
                    <form className='insert-form' onSubmit={submitHandler}>
                        <input
                            type="text"
                            autoFocus
                            placeholder='할 일을 입력 후, 엔터를 누르세요!'
                            value={value}
                            onChange={changeHandler}
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