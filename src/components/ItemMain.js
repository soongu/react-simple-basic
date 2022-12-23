import React, {useState} from 'react';
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";

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



    return (
        <>
            <ItemList items={foodList}/>
            <ItemTotal items={foodList}/>
        </>
    );
};


export default ItemMain;