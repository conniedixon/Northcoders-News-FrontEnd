/** @format */

import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Topics from './components/Topics';
import { Router } from '@reach/router';
import Footer from './components/Footer';
import './App.css';
import SingleArticle from './components/SingleArticle';
import ErrorHandler from './components/ErrorHandler';

class App extends Component {
  state = {
    user: 'grumpy19'
  };

  render() {
    return (
      <div id='root'>
        <Header />
        <NavBar />
        <Router>
          <ErrorHandler default msg='Page Not Found' status={404} />
          <Home path='/' />
          <Topics path='/topics/:topic' />
          <SingleArticle user={this.state.user} path='/articles/:article_id' />
        </Router>
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
