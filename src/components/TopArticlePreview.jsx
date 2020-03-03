import React from 'react';
import {Link} from "@reach/router"

const TopArticlePreview = ({article}) => {
    return (
        <div className="topArticles">
             <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
             <p>n/{article.topic} - {article.author} - {article.created_at}</p>
        </div>
    );
};

export default TopArticlePreview;