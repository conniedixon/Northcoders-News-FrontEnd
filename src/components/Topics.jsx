/** @format */

import React, { Component } from 'react';
import * as api from '../api';
import Loading from './Loading';
import ArticlePreview from './ArticlePreview';

class Topics extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    api.getArticleByTopic(this.props.topic).then(articles => {
      this.setState(currentState => {
        return {
          articles: articles,
          isLoading: false
        };
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      api.getArticleByTopic(this.props.topic).then(articles => {
        this.setState(currentState => {
          return {
            articles: articles,
            isLoading: false
          };
        });
      });
    }
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <div>
        {this.state.articles.map(article => {
          return <ArticlePreview key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
}

export default Topics;
