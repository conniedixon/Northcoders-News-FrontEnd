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
      <main>
        <TopArticles />
        <AllArticles />
      </main>
    );
  }
}

export default Home;
