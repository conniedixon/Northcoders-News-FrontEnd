import React from 'react';

const TopArticlePreview = ({article}) => {
    return (
        <div className="topArticles">
            <h3>{article.title}</h3>
             <p>n/{article.topic} - {article.author} - {article.created_at}</p>
        </div>
    );
};

export default TopArticlePreview;