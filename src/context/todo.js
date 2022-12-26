import React, { createContext, useState, useCallback, useRef } from 'react';

// 컨텍스트 데이터 정의
const TodoContext = createContext({
    state: {
        todos: [],
        value: ''
    },
    actions: {
        setTodos: () => {},
        onInsert: () => {},
        onRemove: () => {},
        onChange: () => {},
        onToggle: () => {},
        onSubmit: () => {},
    }
});

// 컨텍스트 공급자 정의
const TodoProvider = ({children}) => {
    // 할 일 입력창 입력값
    const [value, setValue] = useState('');

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "todoItem1",
            done: true
        },
        {
            id: 2,
            text: "todoItem2",
            done: false
        },
        {
            id: 3,
            text: "todoItem3",
            done: false
        }
    ]);

    // id 값 생성하기
    const nextId = useRef(4);

    // 할 일 추가 함수
    const onInsert = useCallback(text => {
        console.log('text:', text);
        const newTodo = {
            id: nextId.current,
            text,
            done: false
        };

        setTodos(todos => [...todos, newTodo]);

        nextId.current++;
    }, []);

    // 할 일 삭제 함수
    const onRemove = useCallback((id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []);

    // 할 일 체크 함수
    const onToggle = useCallback((id) => {
        setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
    }, []);

    //해당 함수에서 state를 사용한다면, 말그대로 state에 의존하는 함수이므로 두번째 인자의 배열 안에 state를 추가해줘야 하고,
    // state에 의존적이지 않은 함수라면 빈 배열로 넣어주면 된다.
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        e.preventDefault();

        // console.log('val:', value);
        onInsert(value);
        setValue('');

    }, [value, onInsert]);

    // 할 일 처리 함수 모음
    const handlers = {onInsert, onRemove, onToggle, onChange, onSubmit};

    // 상태(state)와 업데이터 함수(actions)를 묶어 객체 생성
    const provideValue = {
        state: {
            todos,
            value
        },
        actions: {
            handlers
        }
    };

    return <TodoContext.Provider value={provideValue}>{children}</TodoContext.Provider>
};

// TodoContext의 Consumer 속성을 TodoConsumer 변수에 저장
const { Consumer: TodoConsumer } = TodoContext;

// TodoProvider, TodoConsumer 내보내기
export { TodoProvider, TodoConsumer };

// TodoContext 내보내기
export default TodoContext;