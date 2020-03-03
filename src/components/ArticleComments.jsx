/** @format */

import React, { Component } from 'react';
import * as api from '../api';
import Loading from './Loading';
import Voter from './Voter';

class ArticleComments extends Component {
  state = {
    isLoading: true,
    comments: []
  };

  componentDidMount() {
    api.getArticleComments(this.props.article_id).then(comments => {
      this.setState(currentState => {
        return {
          isLoading: false,
          comments
        };
      });
    });
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <div>
        {this.state.comments.map(comment => {
          return (
            <>
              <p>{comment.body}</p>
              <p>
                --{comment.author}, {comment.created_at}
              </p>
              <Voter article_id={this.props.article_id} votes={comment.votes} />
            </>
          );
        })}
      </div>
    );
  }
}

export default ArticleComments;
