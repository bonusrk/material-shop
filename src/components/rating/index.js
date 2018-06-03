import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({
                    rating
    }) => {
    let rows = [];
    for (let i = 0; i < 5; i++) {
        let row = i <= rating - 1 ? <span key={i} className="star active"/> : <span key={i} className="star"/>;
        rows.push(row);
    }
    return (
        <div className="product-stars">
            {rows}
        </div>
    )
}

export default Rating

Rating.propTypes = {
    rating: PropTypes.any
}
