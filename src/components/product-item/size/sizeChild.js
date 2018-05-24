import React from 'react';

class SizeChild extends React.Component {
    constructor(props) {
        super(props);
        this.sendSize = this.sendSize.bind(this)

    }
   sendSize(id){
        console.log('sendSize', id);
       this.props.setCurrentSize(id)
   }

    render() {
        const {size} = this.props
        const {currentSize} = this.props
        return (
                <span onClick={() => this.sendSize(size.id)}
                      className={`product-set__item size ${(currentSize.id === size.id? 'active': '')}`}>
                    {size.name}</span>
        );
    }
}



export default SizeChild
