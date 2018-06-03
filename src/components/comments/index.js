/*import React from 'react';
import Comment from './comment';


export default class Comments extends React.Component {

    render() {
        const comments = this.props.comments || [];
        return (
                <div className="comment">
                    {comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                </div>
        );
    }
}*/

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
