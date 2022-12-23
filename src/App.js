import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import TodoTemplate from "./components/todo/TodoTemplate";

import './App.css';
import TodoHeader from "./components/todo/TodoHeader";

const App = () => {

    return (
        <TodoTemplate>
            <TodoHeader />
            <TodoList />
            <TodoInput />
        </TodoTemplate>
    );
};

export default App;
