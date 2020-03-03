/** @format */

import React, { Component } from 'react';
import * as api from '../api';
import Loading from './Loading';
import Voter from './Voter';
import PostAComment from './PostAComment';

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

  // updateComments here: add to props on Post a comment, then call the function
  // so that when called it adds the new comment to the top of the comments list.

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <>
        {this.state.comments.map(comment => {
          return (
            <section>
              <div>
                <PostAComment id={this.props.article_id} />
              </div>
              <div key={comment.comment_id}>
                <p>{comment.body}</p>
                <p>
                  --{comment.author}, {comment.created_at}
                </p>
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
