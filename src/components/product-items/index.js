import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import R from 'ramda';


import {
    getClothesInCategory
} from '../../selectors';

class ProductItems extends React.Component {


    setRating(rating) {
        let rows = [];
        for (let i = 0; i < 5; i++) {
            let row = i <= rating - 1 ? <span key={i} className="star active"></span> :
                <span key={i} className="star"></span>;
            rows.push(row);
        }
        return (
            <div className="product-stars">
                {rows}
            </div>
        )

    }

    setHeight() {
        let products = document.querySelectorAll('.product__img')
        console.log('document.querySelector(\'.product__img\')', document.querySelector('.product__img'));
        console.log('products', products);
        // products.map((product) => product.style.height = document.querySelector('.product__img').style.width)
        // const productWidth = document.querySelector('.product__img').style.width
        // products.map((product) =>  product.style.height = productWidth)
    }

    renderClothes(clothe, index) {
        return (
            <div className="product__griditem" key={index}>
                <Link to={`clothes/${clothe.id}`} className="product ">
                    <div className="product__img-wrap z-depth-1">
                        <div className="product__img "
                             style={{backgroundImage: `url('${clothe.image}')`}}>{/*<img src={clothe.image}/>*/}</div>
                    </div>
                    <div className="product__info">
                        <span className="product__name">{clothe.name}</span>
                        <span className="product__disc">{clothe.description}</span>
                        {this.setRating(clothe.rating)}
                        <span className="product__price">${clothe.price}</span>
                    </div>
                </Link>
            </div>
        )
    }


    render() {
        console.log('this.props.clothes ', this.props.clothes);
        // const data = Object.values(this.props.clothes)
        const data = this.props.clothes
        console.log('data', data);
        return (
            <div className="content">
                <div className="product__grid">
                    {data.map((clothe, index) => this.renderClothes(clothe, index))

                    }
                    {this.setHeight()}
                    {/*{this.setHeight()}*/}
                </div>
            </div>

        );
    }

}


const mapStateToProps = (state, ownProps) => ({
    clothes: getClothesInCategory(state, ownProps)
})


export default connect(mapStateToProps)(ProductItems)
