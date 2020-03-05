/** @format */

import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api.js';

class Navbar extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  }

  render() {
    return (
      <nav className='navbar'>
        <Link to='/'>
          <button className='navLinks'>Home</button>
        </Link>
        {this.state.topics.map(topic => {
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              <button className='navLinks'> {`${topic.slug}`} </button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Navbar;
