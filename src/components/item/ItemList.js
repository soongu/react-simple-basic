import React from 'react';
import Item from "./Item";
import PropTypes from "prop-types";

const ItemList = ({items: foodList}) => {

    return (
        <>
            <ul>
                {foodList.map(food => (
                    <Item key={food.name} item={food}/>
                ))}
            </ul>

        </>
    );
};

ItemList.propTypes = {
    items: PropTypes.array
};

export default React.memo(ItemList);