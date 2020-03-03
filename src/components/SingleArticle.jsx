import React from 'react';

const SingleArticle = ({article}) => {
    return (
        <div>
            <h3>{article.title}</h3>
            <h6>n/{article.topic} - posted by {article.author} on {article.created_at}</h6>
            <p>{article.body}</p>
            <br></br>
            <h5>Comments</h5>
            <p>{article.comment_count} comments</p>
            <p>{article.votes}</p><button>Upvote</button><button>Downvote</button>
            <form>
                //post a comment here
            </form>
               //comments here <ArticleComments article={article}/>
        </div>
    );
};

export default SingleArticle;