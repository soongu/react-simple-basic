import './App.css';
import {useEffect, useState} from "react";

const App = () => {

    const [userName, setUserName] = useState('Kim');

    // 마운트 될 때와 값이 변경될 때 실행
    // 두번째 인자에 빈배열 넣을시: 처음 렌더링시에만 실행
    // 두번째 인자에 배열에 변수넣을시: 해당 값이 업데이트될때만 실행
    // 함수리턴시: clean-up함수 반환하여 컴포너넌트가 언마운트되거나 업데이트되기 직전에 실행
    useEffect(() => {
        console.log('useEffect call!');
        console.log('userName:' + userName);

        return () => {
            console.log('cleanup');
            console.log('cleanup username: ' + userName);
        };

    }, [userName]);

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
