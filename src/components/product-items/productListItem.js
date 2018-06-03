import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {
    setRating
} from '../../functions';


const ProductListItem = ({clothe}) => {
    return (
        <div className="product__griditem">
            <Link to={`/clothes/${clothe.id}`} className="product ">
                <div className="product__img-wrap z-depth-1">
                    <div className="product__img"
                         style={{backgroundImage: `url('${clothe.image}')`}}>{/*<img src={clothe.image}/>*/}</div>
                </div>
                <div className="product__info">
                    <span className="product__name">{clothe.name}</span>
                    <span className="product__disc">{clothe.description}</span>
                    {setRating(clothe.rating)}
                    <span className="product__price">${clothe.price}</span>
                </div>
            </Link>
        </div>
    )
}

export default ProductListItem


ProductListItem.propTypes = {
    clothe: PropTypes.object.isRequired
}
