/** @format */

import React from 'react';
import * as api from '../api';
import ArticleComments from './ArticleComments';
import Loading from './Loading';

class SingleArticle extends React.Component {
  state = {
    newComments: [],
    article: {},
    isLoading: true
  };

  componentDidMount() {
    api.getArticleById(this.props.article_id).then(article => {
      this.setState(currentState => {
        return {
          article,
          isLoading: false
        };
      });
    });
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    const article = this.state.article;
    return (
      <div>
        <div>
          <h1>{article.title}</h1>
          <h6>
            n/{article.topic} - posted by {article.author} on{' '}
            {article.created_at}
          </h6>
          <p>{article.body}</p>
          <h4>Comments</h4>
          <ArticleComments article_id={article.article_id} />
        </div>
      </div>
    );
  }
}

export default SingleArticle;
