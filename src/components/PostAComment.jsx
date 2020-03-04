/** @format */

import React, { Component } from 'react';
import * as api from '../api';

class PostAComment extends Component {
  state = {
    body: {},
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
      this.setState({ postedComment: comment });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>Post A Comment</h5>
        <input type='text' onChange={this.handleChange}></input>
        <button type='submit'>Post</button>
      </form>
    );
  }
}

export default PostAComment;
