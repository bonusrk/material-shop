import React from 'react';
import {connect} from 'react-redux';
import {
    getBasketItemsCount
} from '../../../selectors';
import {Link} from 'react-router';

class ShoppingCart extends React.Component {

   

    render() {
        return (
            <Link to={'/basket'} > <span className={'cart-count'} >{this.props.cartCount}</span> <i className="material-icons">shopping_cart</i></Link>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
   cartCount: getBasketItemsCount(state)
})


export default connect(mapStateToProps)(ShoppingCart)
