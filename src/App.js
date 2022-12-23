import TodoTemplate from "./components/todo/TodoTemplate";

import './App.css';
import {useState} from "react";

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

    return (
        <TodoTemplate todos={todos} />
    );
};

export default App;
