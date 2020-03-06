/** @format */

import React, { Component } from 'react';
import TopArticlePreview from './TopArticlePreview';
import * as api from '../api';
import Loading from './Loading';
import ErrorHandler from './ErrorHandler';

class TopArticles extends Component {
  state = {
    topArticles: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    api
      .getArticles({ sort_by: 'votes', limit: 4 })
      .then(topArticles => {
        this.setState(currentState => {
          return {
            topArticles,
            isLoading: false
          };
        });
      })
      .then(err => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    if (this.state.err)
      return (
        <ErrorHandler
          status={this.state.err.response.status}
          msg={this.state.err.response.msg}
        />
      );
    if (this.state.isLoading) return <Loading />;
    return (
      <>
        <h3 className='secondHeader'>{`<`}Top Articles</h3>
        <div>
          <article className='topArticles-container'>
            {this.state.topArticles.map(article => {
              return <TopArticlePreview article={article} />;
            })}
          </article>
        </div>
      </>
    );
  }
}

export default TopArticles;
