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
        <div className='preview-grid'>
          <article key={article.article_id} className='innertext'>
            <Link to={`/articles/${article.article_id}`}>
              <h3 className='articleTitle'>{article.title}</h3>
            </Link>
            <p className='articleSub'>
              <Link to={`/topics/${article.topic}`} className='articleSub-link'>
                n/{article.topic}
              </Link>{' '}
              - posted by {article.author} on {article.created_at}
            </p>
            <p>{article.body.slice(0, 250)}...</p>
            <p className='articleSub'>{article.comment_count} comments</p>
            <Link to={`/articles/${article.article_id}`}>
              <button> Read More...</button>
            </Link>
            <br />
            <Voter
              votes={article.votes}
              id={article.article_id}
              type='articles'
            />
          </article>
        </div>
      </>
    );
  }
}

export default ArticlePreview;
