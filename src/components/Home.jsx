/** @format */

import React, { Component } from 'react';
import TopArticles from './TopArticles';
import AllArticles from './AllArticles';
// import ErrorHandler from './ErrorHandler';

class Home extends Component {
  state = {
    isLoading: true
  };
  render() {
    return (
      <main>
        <TopArticles />
        <AllArticles />
        {/* <ErrorHandler default msg='Page Not Found' status={404} /> */}
      </main>
    );
  }
}

export default Home;
