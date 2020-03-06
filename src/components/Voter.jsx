/** @format */

import React, { Component } from 'react';
import * as api from '../api';

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = num => {
    api.handleVote(this.props.type, this.props.id, num).then(
      this.setState(currentState => {
        return { optimisticVotes: currentState.optimisticVotes + num };
      })
    );
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes === 1}
          className='voter'>
          Upvote
        </button>
        <p>{this.props.votes + this.state.optimisticVotes} votes</p>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes === -1}
          class='voter'>
          Downvote
        </button>
      </>
    );
  }
}

export default Voter;
