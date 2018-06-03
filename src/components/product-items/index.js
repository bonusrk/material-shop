import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ProductListItem from './productListItem';

import {
    getClothesInCategory
} from '../../selectors';

class ProductItems extends React.Component {

    static propTypes  = {
        clothes : PropTypes.array.isRequired,
    }

    render() {
        const data = this.props.clothes
        return (
            <div className="content">
                <div className="product__grid">
                    {data.map((clothe, index) => <ProductListItem key={index} clothe={clothe} />)}
                </div>
            </div>

        );
    }

}


const mapStateToProps = (state, ownProps) => ({
    clothes: getClothesInCategory(state, ownProps)
})


export default connect(mapStateToProps)(ProductItems)
