import React from 'react';
import SizeChild from './sizeChild';


export default class Size extends React.Component {

    renderSize(size, index){
        return(
            <SizeChild key={index} currentSize={this.props.currentSize} size={size} setCurrentSize={this.props.setCurrentSize}/>
        )
    }


    render() {
        const {size} = this.props
        return (

            <div className="product-item__block">
                <span className="product-item__title">Size</span>
                <div className="product-set">
                    {size.map((size, index) => this.renderSize(size, index))}
                </div>
            </div>

        );
    }
}
