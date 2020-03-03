import React, { Component } from 'react';

class ArticlePreview extends Component {
    render() {
        const article = this.props.article
        return (
            <div>
                <h3>{article.title}</h3>
            <section>
        <p>n/{article.topic} - posted by {article.author} on {article.created_at}</p>
        <p>{article.body.slice(0, 250)}...</p> <button>Read More...</button>
            </section>
        <p>{article.comment_count} comments</p>
        <button>Upvote</button>
        <button>Downvote</button>
        
            
            </div>
        );
    }
}

export default ArticlePreview;