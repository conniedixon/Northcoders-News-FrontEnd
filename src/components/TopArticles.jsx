/** @format */

import React, { Component } from 'react';
import TopArticlePreview from './TopArticlePreview';
import * as api from '../api';
import Loading from './Loading';

class TopArticles extends Component {
  state = {
    topArticles: [],
    isLoading: true
  };

  componentDidMount() {
    api.getArticles({ sort_by: 'votes', limit: 4 }).then(topArticles => {
      this.setState(currentState => {
        return {
          topArticles,
          isLoading: false
        };
      });
    });
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <div>
        <h3>Top Articles</h3>
        <section className='topArticles'>
          {this.state.topArticles.map(article => {
            return <TopArticlePreview article={article} />;
          })}
        </section>
      </div>
    );
  }
}

export default TopArticles;
