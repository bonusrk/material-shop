import React from 'react';

const BasketItem = ({
                        clothe
                    }) => {
    return (
        <div className="cart__item z-depth-1">
            <div className="cart__img"><img src={`../${clothe.image}`}/></div>
            <div className="cart__info">
                <span className="product__name">{clothe.name}</span>
                <span className="product__disc">{clothe.description}</span>

                <span className="product__price">${clothe.price}</span>
                <div className="product__properties">
                    <div><span className={'property'}>Color: </span><span
                        style={{backgroundColor: clothe.currentColor.color}}
                        className={'product-set__item color '}/></div>
                    <div><span className={'property'}>Size: </span><span
                        className={'product-set__item size active'}>{clothe.currentSize.name}</span></div>
                    {clothe.count && <div><span className={'property'}>Count: </span><span
                        className={'product-set__item  property'}>{clothe.count}</span></div>}

                </div>
            </div>
        </div>
    )
}

export default BasketItem
