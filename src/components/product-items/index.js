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
        if (!this.props.data) return null
        if(this.props.fetch) return null
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
    clothes: getClothesInCategory(state, ownProps),
    data: state.clothes.data,
    fetch: state.clothes.fetch
})


export default connect(mapStateToProps)(ProductItems)
