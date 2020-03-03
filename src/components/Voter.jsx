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
    return (
      <div>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes === 1}>
          Upvote
        </button>
        <p>{this.props.votes + this.state.optimisticVotes} votes</p>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes === -1}>
          Downvote
        </button>
      </div>
    );
  }
}

export default Voter;
