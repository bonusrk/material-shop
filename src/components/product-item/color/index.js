import React from 'react';
import PropTypes from 'prop-types';
import ColorChild from './colorChild';

class Color extends React.Component {

    static propTypes  = {
        colors: PropTypes.array.isRequired,
        currentColor: PropTypes.object.isRequired,
        setCurrentColor: PropTypes.func.isRequired

    }

    renderColors(color, index) {
        return (
            <ColorChild key={index} currentColor={this.props.currentColor} color={color} setCurrentColor={this.props.setCurrentColor} />
        )
    }


    render() {
        const {colors} = this.props
        console.log('render Color');
        return (
                <div className="product-set">
                    {colors.map((color, index) => this.renderColors(color, index))}
                </div>
        );
    }
}



export default Color





