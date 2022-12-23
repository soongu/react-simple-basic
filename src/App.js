import './App.css';
import {useEffect, useState} from "react";

const App = () => {

    const [userName, setUserName] = useState('Kim');

    // 마운트 될 때와 값이 변경될 때 실행
    useEffect(() => {
        console.log('useEffect call!');
        console.log('userName:' + userName);
    });

    const handleClickPark = () => setUserName("Park");
    const handleClickHong = () => setUserName("Hong");

    console.log("App userName : " + userName);

    return (
        <div>
            <h1>Hello {userName}!</h1>
            <button onClick={handleClickPark}>Park</button>
            <button onClick={handleClickHong}>Hong</button>
        </div>
    );
};

export default App;
