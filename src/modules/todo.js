
// 액션 타입
const CHANGE_TODO_INPUT = 'todo/CHANGE_TODO_INPUT';
const ADD_TODO = "todo/ADD_TODO";
const TOGGLE_TODO_STATUS = "todo/TOGGLE_TODO_STATUS";
const REMOVE_TODO = "todo/REMOVE_TODO";

// 액션 생성 함수
export const changeTodoInput = (inputValue) => ({
    type: CHANGE_TODO_INPUT,
    inputValue,
});

export const addTodo = (inputValue) => ({
    type: ADD_TODO,
    todo: {
        text: inputValue,
        done: false,
    },
});

export const toggleTodoStatus = (id) => ({
    type: TOGGLE_TODO_STATUS,
    id,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id,
});

// 초기 상태
const initialState = {
    inputValue: "",
    todos: [],
    nextTodoId: 4,
};

// 리듀서 함수 정의
const todos = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TODO_INPUT:
            return {
                ...state,
                inputValue: action.inputValue,
            };
        case ADD_TODO:
            const newTodo = {...action.todo, id: state.nextTodoId};
            state.nextTodoId++;

            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case TOGGLE_TODO_STATUS:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id ? { ...todo, done: !todo.done } : todo
                ),
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };

        default:
            return state;
    }
}

export default todos;