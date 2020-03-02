import React, { Component } from 'react';
import Header from "./components/Header"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import Topics from "./components/Topics"
import { Router } from "@reach/router"
import Footer from './components/Footer';
import "./App.css"


class App extends Component {
  state={
    user: "Connie"
  }


  render() {
    return (
      <div id="root">
        <Header />
        <NavBar />
        <Router >
          <Home path="/"/>
          <Topics path= "/topics/*"/>
        </Router>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default App;