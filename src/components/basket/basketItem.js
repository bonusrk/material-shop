import React from 'react';
import {Link} from 'react-router';

const BasketItem = ({
                        clothe,
                        basketItemMinus,
                        addClotheToBasket,
                        removeClotheFromBasket
                    }) => {
    return (
        <div className="cart__item z-depth-1">
            {console.log('basketItemMinus', basketItemMinus)}
            <Link to={`clothes/${clothe.id}`}>
                <div className="cart__img"><img src={clothe.image}/></div>
            </Link>
            <div className="cart__info">
                <Link to={`clothes/${clothe.id}`}><span className="product__name">{clothe.name}</span></Link>
                <span className="product__disc">{clothe.description}</span>
                <div className="cart__counter">
                    <div onClick={() => {
                        if (clothe.count > 1) {
                            basketItemMinus(clothe)
                        }
                    }
                    } className={`button minus ${clothe.count === 1 ? 'disabled' : ''}`}/>
                    <div className="number">{clothe.count}</div>
                    <div onClick={() => addClotheToBasket(clothe)} className="button plus "/>
                </div>
                <span className="product__price">${clothe.price}</span>
                <div className="product__properties">
                    <div><span className={'property'}>Color: </span><span
                        style={{backgroundColor: clothe.currentColor.color}}
                        className={'product-set__item color '}/></div>
                    <div><span className={'property'}>Size: </span><span
                        className={'product-set__item size active'}>{clothe.currentSize.name}</span></div>
                </div>

            </div>
            <div onClick={() => removeClotheFromBasket(clothe)}
                 className="cart__delete waves-effect waves-light">
                <i className="material-icons">delete</i>
            </div>
        </div>
    )
}

export default BasketItem
