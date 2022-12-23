import React from 'react';
import PropTypes from 'prop-types';

const Item = ({item}) => {
    return (
        <li key={item.name}>
            {item.name}: {item.price} x {item.quantity} = {item.price * item.quantity} 원
        </li>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired
};

export default Item;