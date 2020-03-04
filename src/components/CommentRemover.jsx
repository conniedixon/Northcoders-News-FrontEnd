/** @format */

import React, { Component } from 'react';
import api from '../api';

class CommentRemover extends Component {
  deleteComment = event => {
    api.deleteComment(event.target.id).then(response => {
      console.log('Removed the comment');
    });
  };

  render() {
    return (
      <button onClick={this.deleteComment} id={this.props.comment_id}>
        Delete Comment
      </button>
    );
  }
}

export default CommentRemover;
