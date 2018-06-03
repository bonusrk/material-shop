import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating';

const Comment = ({
                     comment
                 }) => {
    return (
        <div className="comment__item">
            <div className="comment__info">
                <span className="comment__name">{comment.author}</span>
                <div className="comment__props">
                    <div className="product-stars">
                        <Rating rating={comment.rating}/>
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
