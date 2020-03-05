/** @format */

import React, { Component } from 'react';
import api from '../api';

class CommentRemover extends Component {
  deleteComment = event => {
    api.deleteComment(event.target.id).then(() => {
      this.props.handleDelete(this.props.comment_id);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.deleteComment} id={this.props.comment_id}>
          Delete Comment
        </button>
      </div>
    );
  }
}

export default CommentRemover;
