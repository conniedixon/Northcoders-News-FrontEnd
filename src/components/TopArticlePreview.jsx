/** @format */

import React from 'react';
import { Link } from '@reach/router';

const TopArticlePreview = ({ article }) => {
  return (
    <article className='TopArticlePreview innertext'>
      <Link to={`/articles/${article.article_id}`}>
        <h3 className='articleTitle'>{article.title}</h3>
      </Link>
      <p className='articleSub'>
        <Link to={`/topic/${article.topic}`} className='articleSub-link'>
          n/{article.topic}
        </Link>{' '}
        - {article.author} - {article.created_at}
      </p>
    </article>
  );
};

export default TopArticlePreview;
