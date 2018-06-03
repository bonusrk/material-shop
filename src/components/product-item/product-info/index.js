import React from 'react';
import PropTypes from 'prop-types';
import {
    setRating
} from '../../../functions';

const ProductInfo = ({clothe}) => {

    return (
        <div>
            <div className="product-item__img"><img src={`../${clothe.image}`}/></div>
            <div className="product-item__info ">
                <div className="product__info">
                    <span className="product__name">{clothe.name}</span>
                    <span className="product__disc">{clothe.description}</span>
                    <span className="product__price">${clothe.price}</span>
                </div>
                <div className="">
                    {setRating(clothe.rating)}
                    <div className="product-like">
                        <span/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo

ProductInfo.propTypes = {
    clothe: PropTypes.object.isRequired
}
