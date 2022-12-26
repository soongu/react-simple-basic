import TodoTemplate from "./components/todo/TodoTemplate";

import './App.css';
import {useState, useRef, useCallback} from "react";

const App = () => {

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

    // 할 일 처리 함수 모음
    const handlers = {onInsert, onRemove, onToggle};

    return (
        <TodoTemplate todos={todos} handlers={handlers} />
    );
};

export default App;
