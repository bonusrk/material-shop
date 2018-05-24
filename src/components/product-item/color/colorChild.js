/*import React from 'react';

const ColorChild = ({color}, setNewColor) => {
    console.log('setNewColor', this.props.setNewColor);
    return (
        <div>
            <span onClick={() => setNewColor(color)}
                  style={{backgroundColor : color.color}}
                  className={`product-set__item color ${(color.active ? 'active': '')}`}/>
        </div>
    )
}
export default ColorChild*/


import React from 'react';

class ColorChild extends React.Component {
    constructor(props) {
        super(props);
        this.sendColor = this.sendColor.bind(this)

    }

    sendColor(id){
        console.log('sendColor', id);
        this.props.setCurrentColor(id)
    }


    render() {
        console.log('render ColorChild');
        const {color} = this.props
        const {currentColor} = this.props
        console.log('color', color);
        console.log('currentColor', currentColor);
        return (

            <span onClick={() => this.sendColor(color.id)}
                  style={{backgroundColor : color.color}}
                  className={`product-set__item color ${(currentColor.id === color.id ? 'active': '')}`}/>
        );
    }
}


export default ColorChild
