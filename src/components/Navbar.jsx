/** @format */

import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api.js';
import ErrorHandler from './ErrorHandler';

class Navbar extends Component {
  state = {
    topics: [],
    err: null
  };

  componentDidMount() {
    api
      .getTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .then(err => {
        this.setState({ err });
      });
  }

  render() {
    if (this.state.err)
      return (
        <ErrorHandler
          status={this.state.err.response.status}
          msg={this.state.err.response.msg}
        />
      );
    return (
      <nav className='navbar'>
        <Link to='/' key='Home'>
          <p className='navLinks'>Home</p>
        </Link>
        {this.state.topics.map(topic => {
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              <p className='navLinks'> {`${topic.slug}`} </p>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Navbar;
