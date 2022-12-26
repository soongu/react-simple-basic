import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {legacy_createStore as createStore} from "redux";
import todos from "./modules/todo";
import {Provider} from "react-redux";

const store = createStore(todos);

const root = ReactDOM.createRoot(document.getElementById('root'));


const listener = () => {
    root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

// store를 구독하면 store데이터에 변화가 있을 때 listener함수 내부에
// render함수를 실행하고 변경된 데이터를 렌더링한다.
store.subscribe(listener);

// 초기 렌더링을 위해 수동으로 render를 한번 실행해주는 함수호출
listener();


