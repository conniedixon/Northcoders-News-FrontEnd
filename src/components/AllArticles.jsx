/** @format */

import React, { Component } from 'react';
import Loading from './Loading';
import ArticlePreview from './ArticlePreview';
import * as api from '../api';
import SortBy from './SortBy';

class AllArticles extends Component {
  state = {
    isLoading: true,
    articles: [],
    queries: [],
    queryValue: ''
  };

  componentDidMount() {
    api.getArticles(this.state.queries).then(articles => {
      this.setState(currentState => {
        return {
          articles,
          isLoading: false
        };
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queries !== this.state.queries) {
      api.getArticles(this.state.queries).then(articles => {
        this.setState(currentState => {
          return {
            articles,
            isLoading: false
          };
        });
      });
    }
  }

  handleQuery = (queries, value) => {
    this.setState({ queries, isLoading: true, queryValue: value });
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <div>
        <SortBy
          handleQuery={this.handleQuery}
          queryValue={this.state.queryValue}
        />
        <h3>All Articles</h3>
        {this.state.articles.map(article => {
          return <ArticlePreview key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
}

export default AllArticles;
