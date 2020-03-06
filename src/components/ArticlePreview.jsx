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
          <aside>
            <Voter
              votes={article.votes}
              id={article.article_id}
              type='articles'
            />
            <p className='articleSub'>{article.comment_count} comments</p>
          </aside>
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
            <p>
              {article.body.slice(0, 250)}
              {`  `}
              <Link to={`/articles/${article.article_id}`}>
                <button className='readMore'> Read More...</button>
              </Link>
            </p>
          </article>
        </div>
      </>
    );
  }
}

export default ArticlePreview;
