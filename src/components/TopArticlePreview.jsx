/** @format */

import React from 'react';
import { Link } from '@reach/router';

const TopArticlePreview = ({ article }) => {
  return (
    <article>
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>
        n/{article.topic} - {article.author} - {article.created_at}
      </p>
    </article>
  );
};

export default TopArticlePreview;
