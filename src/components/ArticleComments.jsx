/** @format */

import React, { Component } from 'react';
import * as api from '../api';
import Loading from './Loading';
import Voter from './Voter';
import PostAComment from './PostAComment';
import CommentRemover from './CommentRemover';
import ErrorHandler from './ErrorHandler';

class ArticleComments extends Component {
  state = {
    isLoading: true,
    comments: [],
    err: null
  };

  componentDidMount() {
    api
      .getArticleComments(this.props.article_id)
      .then(comments => {
        this.setState(currentState => {
          return {
            isLoading: false,
            comments
          };
        });
      })
      .then(err => {
        this.setState({ err });
      });
  }

  handleDelete = deletedCommentId => {
    let newComments = this.state.comments.filter(comment => {
      return comment.comment_id !== deletedCommentId;
    });
    this.setState(currentState => {
      return {
        comments: newComments
      };
    });
  };

  updateComments = comment => {
    this.setState(currentState => {
      return {
        comments: [comment, ...currentState.comments]
      };
    });
  };

  render() {
    if (this.state.err)
      return (
        <ErrorHandler
          status={this.state.err.response.status}
          msg={this.state.err.response.msg}
        />
      );
    if (this.state.isLoading) return <Loading />;
    return (
      <>
        <div className='indent'>
          <PostAComment
            id={this.props.article_id}
            updateComments={this.updateComments}
          />
        </div>
        <span>
          {this.state.comments.map(comment => {
            return (
              <section
                key={comment.comment_id}
                className='commentsGrid commentsInner'>
                <aside className='aside'>
                  <Voter
                    id={comment.comment_id}
                    votes={comment.votes}
                    type='comments'
                  />
                </aside>
                <p className='articleBody'>
                  {comment.body}
                  {this.props.user === comment.author && (
                    <CommentRemover
                      comment_id={comment.comment_id}
                      handleDelete={this.handleDelete}
                    />
                  )}
                </p>
                <h6>
                  --{comment.author}, {comment.created_at}
                </h6>
              </section>
            );
          })}
        </span>
      </>
    );
  }
}

{
  /* <article className='preview-grid'>
          <aside className='aside'>
            <Voter
              votes={article.votes}
              type='articles'
              id={article.article_id}
            />
          </aside>

          <p className='articleBody'>
            {article.body}
            <h6 className='article-Sub indent'>
              <Link className='articleSub-link' to={`/topics/${article.topic}`}>
                n/{article.topic}
              </Link>{' '}
              - posted by {article.author} on {article.created_at}
            </h6>
          </p>
        </article> */
}

export default ArticleComments;
