import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

const ItemTotal = ({items: foodList}) => {

    // 상태값 계산 함수
    const calcTotalPrice = foodList => {
        return foodList.reduce((sum, food) => {
            return sum + (food.price * food.quantity);
        }, 0);
    };

    // useMemo 훅: 상태값이 변경되지 않으면 그전에 계산된 값을 보관하고있다가 그대로사용하여 성능을 향상시킨다.
    const totalPrice = useMemo(() => calcTotalPrice(foodList), [foodList]);

    return (
        <p>합계: {totalPrice}원</p>
    );
};

ItemTotal.propTypes = {
    items: PropTypes.array
};

export default ItemTotal;