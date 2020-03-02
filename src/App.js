import React, { Component } from 'react';
import Header from "./components/Header"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import Topics from "./components/Topics"
import { Router } from "@reach/router"
import Footer from './components/Footer';

class App extends Component {
  state={
  }


  render() {
    return (
      <div>
        <Header/>
        <NavBar/>
        <Router>
          <Home path="/"/>
          <Topics path= "/topics"/>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;