import React from 'react';
import ColorChild from './colorChild';

class Color extends React.Component {

    renderColors(color, index) {
        return (
            <ColorChild key={index} currentColor={this.props.currentColor} color={color} setCurrentColor={this.props.setCurrentColor} />
        )
    }


    render() {
        const {color} = this.props
        console.log('render Color');
        return (
            <div className="product-item__block">
                <span className="product-item__title">Color</span>
                <div className="product-set">
                    {color.map((color, index) => this.renderColors(color, index))}
                </div>
            </div>

        );
    }
}



export default Color





