/** @format */

import React, { Component } from 'react';

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = num => {
    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + num };
    });
  };

  render() {
    console.log(this.state.optimisticVotes);
    return (
      <div>
        <button
          onClick={() => {
            this.handleClick(1);
          }}>
          Upvote
        </button>
        <p>currentVotes</p>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}>
          Downvote
        </button>
      </div>
    );
  }
}

export default Voter;
