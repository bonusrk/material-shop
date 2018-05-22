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

    sendColor(color){
        console.log('sendColor', color);
        this.props.setNewColor(color)
    }


    render() {
        const {color} = this.props
        return (

            <span onClick={() => this.sendColor(color)}
                  style={{backgroundColor : color.color}}
                  className={`product-set__item color ${(color.active ? 'active': '')}`}/>
        );
    }
}


export default ColorChild
