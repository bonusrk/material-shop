import React from 'react';

export default class InputComponent extends React.Component {



    render() {
        return (
            <div className="input-field">
                <input onChange={this.props.validate} id={this.props.id} type={this.props.type} value={this.props.value} className="validate"/>
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>

        );
    }
}
