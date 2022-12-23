import React, {useCallback, useState} from 'react';
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";
import ItemInput from "./ItemInput";

const ItemMain = () => {

    const createDummyFoods = () => {
        const foodArray = [];

        for (let i = 0; i < 2000; i++) {
            foodArray.push({
                name: `food${i}`,
                price: parseInt(100000 * Math.random(), 10),
                quantity: 1 + parseInt(10 * Math.random(), 10),
            });
        }
        return foodArray;
    };

    const [foodList, setFoodList] = useState(createDummyFoods());

    // 이벤트 처리 함수 정의
    const onChangePrice = useCallback((name, price) => {
        console.log("onChangePrice name : " + name + " price : " + price);

        setFoodList(foodList =>
            foodList.map((food) =>
                food.name === name ? {...food, price: price} : food
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


export default React.memo(ItemMain);