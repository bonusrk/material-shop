import React from 'react';
import {Link} from 'react-router';

const Total = ({
                   totalItems,
                   totalPrice
               }) => {
    return (
        <div className="block-bottom">
            <div className="total">
                <div className="total__items">
                    <span className="total__sub">Subtotal - </span>
                    <span className="total__count">{
                        totalItems > 1 ?
                            totalItems + ' Items'
                            :
                            totalItems + ' Item'
                    } </span>
                </div>
                <span className="total__price">${totalPrice}</span>
            </div>
            <Link to={'order'} className="waves-effect waves-light btn">PROCEED TO CHECKOUT</Link>
        </div>
    )
}

export default Total
