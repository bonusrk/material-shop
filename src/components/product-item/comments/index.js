import React from 'react';



export default class Comments extends React.Component {



    renderComments(comment, index){

        return(
            <div key={index} className="comment__item">
                <div className="comment__info">
                    <span className="comment__name">{comment.author}</span>
                    <div className="comment__props">
                        <div className="product-stars">
                            {this.props.setRating(comment.rating)}
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

    render() {
        const comments = this.props.comments || [];
        return (
            <div className="product-item__block">
                <span className="product-item__title">Customer Reviews</span>
                <div className="comment">
                    {comments.map((comment, index) => this.renderComments(comment, index))}
                </div>
            </div>

        );
    }
}
