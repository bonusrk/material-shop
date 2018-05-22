import React from 'react';
import ColorChild from './colorChild';

class Color extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            currentColor: null
        }

        this.setNewColor = this.setNewColor.bind(this)
    }



    renderColors(color, index) {
        return (
            <ColorChild key={index} color={color} setNewColor={this.setNewColor} />
        )
    }

    setNewColor(color){
        console.log('setNewColor', color);
    }


    render() {
        const {color} = this.props
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





