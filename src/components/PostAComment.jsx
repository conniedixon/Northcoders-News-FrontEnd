/** @format */

import React, { Component } from 'react';
import * as api from '../api';

class PostAComment extends Component {
  state = {
    comment: '',
    postedComment: ''
  };

  handleChange = ({ target: { value } }) => {
    this.setState(currentState => {
      return {
        comment: value
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.postAComment(this.props.id, this.state.comment).then(comment => {
      this.props.updateComments(comment);
      this.setState({ postedComment: comment, comment: '' });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>Post A Comment</h5>
        <textarea
          type='text'
          minLength='10'
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <button>Post</button>
      </form>
    );
  }
}

export default PostAComment;
