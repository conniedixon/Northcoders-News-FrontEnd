/** @format */

import React, { Component } from 'react';
import * as api from '../api';

class PostAComment extends Component {
  state = {
    body: {}
  };

  handlePost = body => {
    api.postComment(body).then(({ comment }) => {});
  };

  render() {
    return <div>Form here</div>;
    //make a handleinput and a handle submit function, on submit call the props.addComment in ArticleComments
  }
}

export default PostAComment;
