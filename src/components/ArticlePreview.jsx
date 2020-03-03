import React, { Component } from 'react';
import { Link } from "@reach/router"



class ArticlePreview extends Component {
    state={
        showArticle: false
    }

    render() {
        const article = this.props.article       
        return (
            <>
                <h3>{article.title}</h3>
            <section>
        <p>n/{article.topic} - posted by {article.author} on {article.created_at}</p>
        <p>{article.body.slice(0, 250)}...</p> 
         <Link to={`/articles/${article.article_id}`}><button> Read More...</button></Link>
         <p>{article.comment_count} comments</p>
         <button>Upvote</button>
         <button>Downvote</button>
             </section>
        </>
        );
    }
}
    

export default ArticlePreview;