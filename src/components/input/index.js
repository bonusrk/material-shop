import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({
                            validate,
                            id,
                            type,
                            value,
                            label
                        }) => {
    return (
        <div className="input-field">
            <input onChange={validate} id={id} type={type} value={value} className="validate"/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default InputComponent

InputComponent.propsTypes = {
    validate: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}
