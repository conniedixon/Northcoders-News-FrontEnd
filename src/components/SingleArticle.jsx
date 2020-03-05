/** @format */

import React from 'react';
import * as api from '../api';
import ArticleComments from './ArticleComments';
import Loading from './Loading';
import Voter from './Voter';

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
      <article>
        <h1>{article.title}</h1>
        <h6>
          n/{article.topic} - posted by {article.author} on {article.created_at}
        </h6>
        <div>
          <Voter
            votes={article.votes}
            type='articles'
            id={article.article_id}
          />
        </div>
        <p>{article.body}</p>
        <section>
          <h4>Comments</h4>
          <ArticleComments
            user={this.props.user}
            article_id={article.article_id}
          />
        </section>
      </article>
    );
  }
}

export default SingleArticle;
