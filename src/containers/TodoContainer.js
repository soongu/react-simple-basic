import React from "react";
// connect 함수 임포트
import {connect} from "react-redux";
// 액션 생성 함수 임포트
import {
    changeTodoInput,
    addTodo,
    toggleTodoStatus,
    removeTodo
} from "../modules/todo";

import TodoTemplate from "../components/todo/TodoTemplate";

// connect 함수에 의해 상태와 스토어 상태 변경 함수를 props로 전달받음
const TodoContainer = ({
                            inputValue,
                            todos,
                            changeTodoInput,
                            addTodo,
                            toggleTodoStatus,
                            removeTodo
                        }) => {
// Todos 컴포넌트에 props로 전달
    return (
        <TodoTemplate
            inputValue={inputValue}
            todos={todos}
            onChangeInput={changeTodoInput}
            onInsert={addTodo}
            onToggle={toggleTodoStatus}
            onRemove={removeTodo}
        />
    );
};

// 스토어 상태를 props로 매핑
const mapStateToProps = (state) => ({
    inputValue: state.inputValue,
    todos: state.todos,
});

// 스토어 상태 변경 함수를 props로 매핑
const mapDispatchToProps = (dispatch) => ({
    changeTodoInput: (inputValue) => {
        dispatch(changeTodoInput(inputValue));
    },
    addTodo: (input) => {
        dispatch(addTodo(input));
    },
    toggleTodoStatus: (id) => {
        dispatch(toggleTodoStatus(id));
    },
    removeTodo: (id) => {
        dispatch(removeTodo(id));
    }

});

// 리덕스와 연동된 컴포넌트 반환
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);