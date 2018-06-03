import React from 'react';
import {connect} from 'react-redux';

import {
    getBasketClothesWithCount,
    getBasketItemsCount,
    getTotalPrice
} from '../../selectors';
import {
    removeClotheFromBasket,
    basketItemMinus,
    addClotheToBasket
} from '../../actions';

import Total from './total';
import BasketItem from './basketItem';

class Basket extends React.Component {

    constructor(props){
        super(props)
        this.removeClotheFromBasket=this.props.removeClotheFromBasket.bind(this)
        this.basketItemMinus=this.props.basketItemMinus.bind(this)
        this.addClotheToBasket=this.props.addClotheToBasket.bind(this)
    }

    render() {
        const {basket} = this.props
        return (
            <div className="main-block">
                <div className="content">
                    <div className="cart">{
                        basket.length > 0 ?
                            basket.map((clothe, index)=> <BasketItem
                                key={index}
                                clothe={clothe}
                                removeClotheFromBasket={this.removeClotheFromBasket}
                                basketItemMinus={this.basketItemMinus}
                                addClotheToBasket={this.addClotheToBasket}
                            />)
                            :
                            <div>Your shopping cart is empty</div>
                    }
                    </div>
                </div>
                {
                    basket.length > 0 ?
                        <Total totalItems={this.props.cartCount} totalPrice={this.props.totalPrice}/>
                        :
                        null
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
   basket: getBasketClothesWithCount(state),
   cartCount: getBasketItemsCount(state),
   totalPrice: getTotalPrice(state)
})

const mapDispatchToProps = {
    removeClotheFromBasket,
    basketItemMinus,
    addClotheToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
