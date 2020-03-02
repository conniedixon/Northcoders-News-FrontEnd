import React, { Component } from 'react';

class ArticleCard extends Component {
    render() {
        const article = this.props.article
        return (
            <div>
                <h3>{article.title}</h3>
        <p>n/{article.topic} - posted by {article.author} on {article.created_at}</p>
        <p>{article.body}</p>
        <button>Upvote</button>
        <button>Downvote</button>
        <p>Comments Card</p>
            </div>
        );
    }
}

export default ArticleCard;