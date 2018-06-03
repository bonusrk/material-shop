import React from 'react';
import Comment from './comment';
import PropTypes from 'prop-types';

const Comments = ({
                      comments
                  }) => {
    return (
        <div className="comment">
            {comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        </div>
    )
}

export default Comments

Comments.propTypes = {
    comments: PropTypes.array.isRequired
}
