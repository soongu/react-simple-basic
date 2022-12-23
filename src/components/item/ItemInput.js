import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

const ItemInput = ({ items: foodList, onChangePrice }) => {

    // 텍스트 입력 요소 변경 이벤트 처리 함수
    const handleChange = useCallback(({target}) => {
        console.log("name : " + target.name);
        console.log("value : " + target.value);

        onChangePrice(target.name, target.value);
    }, [onChangePrice]);

    return (
        <ul>
            {/* 이벤트 처리 함수(handleChange) 지정 */}
            {foodList.map(food => (
                <li key={food.name}>
                    {food.name}의 가격:{" "}
                    <input
                        type="text"
                        name={food.name}
                        value={food.price}
                        onChange={handleChange}
                    />
                </li>
            ))}
        </ul>
    );
};

ItemInput.propTypes = {
    items: PropTypes.array,
    onChangePrice: PropTypes.func
};

export default React.memo(ItemInput);