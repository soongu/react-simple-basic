import React, {useCallback, useState} from 'react';
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";
import ItemInput from "./ItemInput";

const ItemMain = () => {

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

    // 이벤트 처리 함수 정의
    const onChangePrice = useCallback((name, price) => {
        console.log("onChangePrice name : " + name + " price : " + price);

        setFoodList(foodList =>
            foodList.map((food) =>
                food.name === name ? { ...food, price: price } : food
            )
        );
    }, []);


    return (
        <>
            <ItemInput items={foodList} onChangePrice={onChangePrice} />
            <hr/>
            <ItemList items={foodList}/>
            <ItemTotal items={foodList}/>
        </>
    );
};


export default ItemMain;