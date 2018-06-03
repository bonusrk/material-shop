import React from 'react';
import PropTypes from 'prop-types';

const ColorChild = ({
                        color,
                        currentColor,
                        setCurrentColor
                    }) => {
    return (
        <span onClick={() => setCurrentColor(color.id)}
              style={{backgroundColor: color.color}}
              className={`product-set__item color ${(currentColor.id === color.id ? 'active' : '')}`}/>
    )
}

export default ColorChild


ColorChild.propTypes = {
    color: PropTypes.object.isRequired,
    currentColor: PropTypes.object.isRequired,
    setCurrentColor: PropTypes.func.isRequired
}
