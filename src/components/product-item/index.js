import React from 'react';
import {connect} from 'react-redux';
import R from 'ramda';
import {
    fetchClothesById,
    addClotheToBasket
} from '../../actions/index';
import Comments from './comments';
import Color from './color';

class ProductItem extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            currentColor: null
        }

        this.setCurrentColor = this.setCurrentColor.bind(this)
    }

    setCurrentColor(id){
        this.setState({currentColor: id})
    }

    componentDidMount() {
        this.props.fetchClothesById(this.props.params.id)
        console.log('this.props.params.id', this.props.params.id);
        console.log('this.props.clothe.color',this.props.clothe.color);
        const colors = this.props.clothe.color || []
        const currentColor = R.filter((color) => color.active, colors )
        console.log('currentColor', currentColor);
    }

    setRating(rating) {
        let rows= [];
        for(let i = 0; i<5; i++){
            let row =  i<=rating-1 ? <span key={i} className="star active"/> : <span key={i} className="star"/>;
            rows.push(row) ;
        }
        return (
            <div className="product-stars">
                {rows}
            </div>
        )

    }


    setDetails(detail, index){
        return (
            <p key={index}>{detail}</p>
        )

    }


    render() {
        const {clothe} = this.props
        const details = clothe.details || [];
        const color = clothe.color || []
        return (
            <div className="product-item ">

                <div className="product-item__container z-depth-1">
                    {/*small bug fix*/}
                    <div className="product-item__img"><img src={`../${clothe.image}`}/></div>
                    <div className="product-item__info ">
                        <div className="product__info">
                            <span className="product__name">{clothe.name}</span>
                            <span className="product__disc">{clothe.description}</span>
                            <span className="product__price">${clothe.price}</span>
                        </div>
                        <div className="">
                            {this.setRating(clothe.rating)}
                            <div className="product-like">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <Color color={color} setCurrentColor = {this.setCurrentColor}/>
                    {/*<div className="product-item__block">
                        <span className="product-item__title">Color</span>
                        <div className="product-set">
                            <span className="product-set__item color color-1"></span>
                            <span className="product-set__item color color-2"></span>
                            <span className="product-set__item color color-3 active"></span>
                            <span className="product-set__item color color-4"></span>
                            <span className="product-set__item color color-5"></span>
                            <span className="product-set__item color color-6"></span>
                        </div>
                    </div>*/}
                    <div className="product-item__block">
                        <span className="product-item__title">Size</span>
                        <div className="product-set">
                            <span className="product-set__item size">xs</span>
                            <span className="product-set__item size">s</span>
                            <span className="product-set__item size active">m</span>
                            <span className="product-set__item size">l</span>
                            <span className="product-set__item size">xl</span>
                        </div>
                    </div>
                    <div className="product-item__block product-item__line">
                        <a className="waves-effect waves-light btn ">BUY NOW</a>
                        <button onClick={()=> this.props.addClotheToBasket(clothe.id)} className="waves-effect waves-light btn ">Add to Cart</button>
                    </div>
                    <div className="product-item__block">
                        <span className="product-item__title">Details</span>
                        {details.map((detail, index) => this.setDetails(detail, index))}
                    </div>
                    <Comments setRating={this.setRating} comments = {clothe.comments} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    clothe: state.clothesById,
})

const mapDispatchToProps = {
    fetchClothesById,
    addClotheToBasket: addClotheToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
