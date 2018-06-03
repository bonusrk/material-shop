import React from 'react';
import PropTypes from 'prop-types';
import {
    setRating
} from '../../functions';

const Comment = ({
                     comment
                 }) => {
    return (
        <div className="comment__item">
            <div className="comment__info">
                <span className="comment__name">{comment.author}</span>
                <div className="comment__props">
                    <div className="product-stars">
                        {setRating(comment.rating)}
                    </div>
                    <span className="comment__date">{comment.data}</span>
                </div>
            </div>
            <div className="comment__text">
                <p>{comment.text}</p>
            </div>
        </div>
    )
}

export default Comment

Comment.propTypes = {
    comment: PropTypes.object.isRequired
}
