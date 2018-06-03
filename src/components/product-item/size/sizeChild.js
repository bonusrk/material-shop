import React from 'react';
import PropTypes from 'prop-types';

const SizeChild = ({
                       size,
                       currentSize,
                       setCurrentSize
                   }) => {
    return (
        <span onClick={() => setCurrentSize(size.id)}
              className={`product-set__item size ${(currentSize.id === size.id? 'active': '')}`}>
                    {size.name}</span>
    )
}

export default SizeChild

SizeChild.propTypes = {
    size: PropTypes.object.isRequired,
    currentSize: PropTypes.object.isRequired,
    setCurrentSize: PropTypes.func.isRequired
}
