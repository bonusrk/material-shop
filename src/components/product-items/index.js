import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import R from 'ramda';
import {
    fetchClothes,
    fetchClothesInCategory
} from '../../actions/index';

import {
    getClothesInCategory
} from '../../selectors';

class ProductItems extends React.Component{

    componentDidMount(){
        this.props.fetchClothesInCategory(this.props.params)
    }

    setRating(rating){
        let rows= [];
        for(let i = 0; i<5; i++){
            let row =  i<=rating-1 ? <span key={i} className="star active"></span> : <span key={i} className="star"></span>;
            rows.push(row) ;
        }
        return (
            <div className="product-stars">
                {rows}
            </div>
        )

    }

    renderClothes(clothe, index) {
        return (
            <div className="col s6" key={index}>
                <a className="product ">
                    <div className="product__img z-depth-1"><img src={clothe.image}/></div>
                    <div className="product__info">
                        <span className="product__name">{clothe.name}</span>
                        <span className="product__disc">{clothe.description}</span>
                        {this.setRating(clothe.rating)}
                        <span className="product__price">{clothe.price}</span>
                    </div>
                </a>
            </div>
        )
    }


    render() {
       console.log('this.props.clothes ', this.props.clothes );
        const data =Object.values(this.props.clothes)
        console.log('data', data);
        return (
            <div className="content">
                <div className="row">
                    { data.map((clothe, index) => this.renderClothes(clothe, index))}
                </div>
            </div>

        );
    }

}


const mapStateToProps = (state, ownProps) => ({
    clothes: state.clothesInCategory,
})

const mapDispatchToProps = {
    fetchClothes,
    fetchClothesInCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItems)
