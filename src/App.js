import './App.css';
import {useEffect, useMemo, useState} from "react";

const App = () => {

    const foodArray = [
        {
            name: "짜장면",
            price: 6000,
            quantity: 3,
        },
        {
            name: "탕수육",
            price: 20000,
            quantity: 2,
        },
        {
            name: "짬뽕",
            price: 7000,
            quantity: 4,
        },
    ];

    const [foodList, setFoodList] = useState(foodArray);


    // 상태값 계산

    // const totalPrice = foodList.reduce((sum, food) => {
    //      return sum + (food.price * food.quantity);
    // }, 0);

    // 상태값 계산 함수
    const calcTotalPrice = foodList => {
        return foodList.reduce((sum, food) => {
            return sum + (food.price * food.quantity);
        }, 0);
    };

    // useMemo 훅: 상태값이 변경되지 않으면 그전에 계산된 값을 보관하고있다가 그대로사용하여 성능을 향상시킨다.
    const totalPrice = useMemo(() => calcTotalPrice(foodList), [foodList]);

    return (
        <>
            <ul>
                {foodList.map(food => (
                    <li key={food.name}>
                        {food.name}: {food.price} x {food.quantity} = {food.price * food.quantity} 원
                    </li>
                ))}
            </ul>

            <p>합계: {totalPrice}원</p>
        </>
    );
};

export default App;
