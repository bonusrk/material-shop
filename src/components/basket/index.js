import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
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
                <Link  to={`clothes/${clothe.id}`}><div className="cart__img"><img src={clothe.image} /></div></Link>
                <div className="cart__info">
                    <Link  to={`clothes/${clothe.id}`}><span className="product__name">{clothe.name}</span></Link>
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
                    <div className="product__properties">
                       <div><span className={'property'}>Color: </span><span style={{backgroundColor : clothe.currentColor.color}}
                                               className={'product-set__item color '}/></div>
                        <div><span className={'property'}>Size: </span><span className={'product-set__item size active'}>{clothe.currentSize.name}</span></div>
                    </div>

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
