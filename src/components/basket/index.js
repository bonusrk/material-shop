import React from 'react';
import {connect} from 'react-redux';
import {
    getBasketClothesWithCount
} from '../../selectors';
import {
    removeClotheFromBasket
} from '../../actions';

class Basket extends React.Component {

    renderBasketItem(clothe, index){
        return(
            <div key={index} className="cart__item z-depth-1">
                <div className="cart__img"><img src={clothe.image} /></div>
                <div className="cart__info">
                    <span className="product__name">{clothe.name}</span>
                    <span className="product__disc">{clothe.description}</span>
                    <div className="cart__counter">
                        <div className="button plus"></div>
                        <div className="number">{clothe.count}</div>
                        <div className="button minus"></div>
                    </div>
                    <span className="product__price">${clothe.price}</span>
                </div>
                <div onClick={()=>this.props.removeClotheFromBasket(clothe.id)} className="cart__delete waves-effect waves-light">
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
                    <div className="cart">
                        {basket.map((clothe, index)=> this.renderBasketItem(clothe, index))}
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
   basket:getBasketClothesWithCount(state)
})

const mapDispatchToProps = {
    removeClotheFromBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
