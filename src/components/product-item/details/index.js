import React from 'react';
import PropTypes from 'prop-types';

const Details = ({details}) => {
    return (
        <div>
            {details.map((detail, index) => <p key={index}>{detail}</p>)}
        </div>
    )
}

export default Details


Details.propTypes = {
    details: PropTypes.array.isRequired
}
