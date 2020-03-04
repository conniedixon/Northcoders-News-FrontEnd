/** @format */

import React, { Component } from 'react';
import * as api from '../api';
import Loading from './Loading';
import Voter from './Voter';
import PostAComment from './PostAComment';
import CommentRemover from './CommentRemover';

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

  updateComments = comment => {
    this.setState(currentState => {
      return {
        comments: [comment, ...currentState.comments]
      };
    });
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <>
        <PostAComment
          id={this.props.article_id}
          updateComments={this.updateComments}
        />
        {this.state.comments.map(comment => {
          return (
            <section key={comment.comment_id}>
              <div>
                <p>{comment.body}</p>
                <h6>
                  --{comment.author}, {comment.created_at}
                </h6>
                {this.props.user === comment.author && <CommentRemover />}
                <Voter
                  id={comment.comment_id}
                  votes={comment.votes}
                  type='comments'
                />
              </div>
            </section>
          );
        })}
      </>
    );
  }
}

export default ArticleComments;
