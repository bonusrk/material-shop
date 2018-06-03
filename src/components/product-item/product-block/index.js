import React from 'react';
import PropTypes from 'prop-types';

const ProductBlock = ({
                          children,
                          title
                      }) => {
    return (
        <div className="product-item__block">
            <span className="product-item__title">{title}</span>
            {children}
        </div>
    )
}

export default ProductBlock

ProductBlock.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string
}
