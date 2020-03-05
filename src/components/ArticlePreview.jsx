/** @format */

import React, { Component } from 'react';
import { Link } from '@reach/router';
import Voter from './Voter';

class ArticlePreview extends Component {
  state = {
    showArticle: false
  };

  render() {
    const article = this.props.article;
    return (
      <>
        <article key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <h3>{article.title}</h3>
          </Link>
          <p>
            n/{article.topic} - posted by {article.author} on{' '}
            {article.created_at}
          </p>
          <p>{article.body.slice(0, 250)}...</p>
          <Link to={`/articles/${article.article_id}`}>
            <button> Read More...</button>
          </Link>
          <p>{article.comment_count} comments</p>
          <Voter
            votes={article.votes}
            id={article.article_id}
            type='articles'
          />
        </article>
      </>
    );
  }
}

export default ArticlePreview;
