/** @format */

import React from 'react';
import * as api from '../api';
import ArticleComments from './ArticleComments';
import Loading from './Loading';
import Voter from './Voter';
import ErrorHandler from './ErrorHandler';
import { Link } from '@reach/router';

class SingleArticle extends React.Component {
  state = {
    newComments: [],
    article: {},
    isLoading: true,
    err: null
  };

  componentDidMount() {
    api
      .getArticleById(this.props.article_id)
      .then(article => {
        this.setState(currentState => {
          return {
            article,
            isLoading: false
          };
        });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    if (this.state.err)
      return (
        <ErrorHandler
          status={this.state.err.response.status}
          msg={this.state.err.response.data.msg}
        />
      );
    if (this.state.isLoading) return <Loading />;
    const article = this.state.article;
    return (
      <article>
        <h1 className='secondHeader singleHeader'>
          {`<`}
          {article.title}
          {` `}
        </h1>

        <article className='preview-grid'>
          <aside className='aside'>
            <Voter
              votes={article.votes}
              type='articles'
              id={article.article_id}
            />
          </aside>

          <p className='articleBody'>
            {article.body}
            <h6 className='article-Sub indent'>
              <Link className='articleSub-link' to={`/topics/${article.topic}`}>
                n/{article.topic}
              </Link>{' '}
              - posted by {article.author} on {article.created_at}
            </h6>
          </p>
        </article>

        <section>
          <h4 className='articleTitle commentIndent'>Comments</h4>
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
