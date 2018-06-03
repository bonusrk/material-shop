import React from 'react';
import PropTypes from 'prop-types';
import SizeChild from './sizeChild';

const Size = ({
                  sizes,
                  currentSize,
                  setCurrentSize
              }) => {
    return (
        <div className="product-set">
            {sizes.map((size, index) => <SizeChild key={index} currentSize={currentSize} size={size} setCurrentSize={setCurrentSize}/>)}
        </div>
    )
}

export default Size

Size.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.object.isRequired,
    setCurrentSize: PropTypes.func.isRequired
}
