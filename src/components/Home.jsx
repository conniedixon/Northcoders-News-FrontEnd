/** @format */

import React, { Component } from 'react';
import TopArticles from './TopArticles';
import AllArticles from './AllArticles';

class Home extends Component {
  state = {
    isLoading: true
  };
  render() {
    return (
      <div className='main'>
        <TopArticles />
        <AllArticles />
      </div>
    );
  }
}

export default Home;
