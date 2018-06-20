import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {
    fetchClothesById,
    addClotheToBasket,
    changeColor,
    changeSize
} from '../../actions/index';
import ProductBlock from './product-block';
import ProductInfo from './product-info';
import Comments from '../comments';
import Color from './color';
import Size from './size';
import Details from './details';

class ProductItemContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }

        this.setCurrentColor = this.setCurrentColor.bind(this)
        this.setCurrentSize = this.setCurrentSize.bind(this)
    }
    static propTypes = {
        fetchClothesById : PropTypes.func.isRequired,
        addClotheToBasket : PropTypes.func.isRequired,
        changeColor : PropTypes.func.isRequired,
        changeSize : PropTypes.func.isRequired,
        clothe: PropTypes.object.isRequired
    }

    setCurrentColor(id) {
        this.props.changeColor(id)
    }

    setCurrentSize(id) {
        this.props.changeSize(id)
    }

    componentDidMount() {
        this.props.fetchClothesById(this.props.params.id)
        this.setState({
            loading: false
        })
    }


    render() {
        if (this.state.loading) return null
        const {clothe} = this.props
        const {
            details,
            color,
            size,
            currentColor,
            currentSize,
            comments
        } = clothe


        console.log('render ProductItemContainer');
        return (
            <div className="product-item ">
                <div className="product-item__container z-depth-1">
                    <ProductInfo clothe={clothe}/>
                    <ProductBlock title={'Color'}>
                        <Color colors={color} currentColor={currentColor} setCurrentColor={this.setCurrentColor}/>
                    </ProductBlock>
                    <ProductBlock title={'Size'}>
                        <Size sizes={size} currentSize={currentSize} setCurrentSize={this.setCurrentSize}/>
                    </ProductBlock>
                    <div className="product-item__block product-item__line">
                        <Link to={`order/${clothe.id}`} className="waves-effect waves-light btn ">BUY NOW</Link>
                        <button onClick={() => this.props.addClotheToBasket(clothe)}
                                className="waves-effect waves-light btn ">Add to Cart
                        </button>
                    </div>
                    <ProductBlock title={'Details'}>
                        <Details details={details}/>
                    </ProductBlock>
                    <ProductBlock title={'Customer Reviews'}>
                        <Comments comments={comments}/>
                    </ProductBlock>
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
    addClotheToBasket,
    changeColor,
    changeSize
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemContainer)
