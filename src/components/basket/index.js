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

class Basket extends React.Component {

    renderBasketItem(clothe, index){
        return(
            <div key={index} className="cart__item z-depth-1">
                <div className="cart__img"><img src={clothe.image} /></div>
                <div className="cart__info">
                    <span className="product__name">{clothe.name}</span>
                    <span className="product__disc">{clothe.description}</span>
                    <div className="cart__counter">
                        <div  onClick={()=> {
                             if( clothe.count > 1){
                                 this.props.basketItemMinus(clothe)}
                             }
                            }  className={`button minus ${clothe.count === 1 ? 'disabled' : ''}`}/>
                        <div className="number">{clothe.count}</div>
                        <div onClick={()=>this.props.addClotheToBasket(clothe)}  className="button plus "/>
                    </div>
                    <span className="product__price">${clothe.price}</span>
                    <span className="product__price">{clothe.currentColor.id}</span>
                </div>
                <div onClick={()=>this.props.removeClotheFromBasket(clothe)} className="cart__delete waves-effect waves-light">
                    <i className="material-icons">delete</i>
                </div>
            </div>
        )
    }

    render() {
        console.log('this.props.basket', this.props.basket);
        const {basket} = this.props
        return (
            <div className="main-block">
                <div className="content">
                    <div className="cart">{
                        basket.length > 0 ?
                            basket.map((clothe, index)=> this.renderBasketItem(clothe, index))
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
