import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    getBasketItemsCount
} from '../../../selectors';
import {Link} from 'react-router';


const ShoppingCart = ({
                          cartCount
                      }) => {
    return (
        <Link to={'/basket'}>
            <span className={'cart-count'}>{cartCount}</span>
            <i className="material-icons">shopping_cart</i>
        </Link>
    )
}


const mapStateToProps = (state, ownProps) => ({
    cartCount: getBasketItemsCount(state)
})


export default connect(mapStateToProps)(ShoppingCart)


ShoppingCart.propTypes = {
    cartCount: PropTypes.any
}

