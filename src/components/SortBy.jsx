/** @format */

import React, { Component } from 'react';

class SortBy extends Component {
  handleChange = event => {
    const queryArr = {
      sort_by: event.target.value.split(',')[0],
      order: event.target.value.split(',')[1]
    };
    this.props.handleQuery(queryArr);
  };

  render() {
    return (
      <div>
        SortBy:
        <select onChange={this.handleChange}>
          <option value={['created_at', 'asc']}>Newest</option>
          <option value={['created_at', 'desc']}>Oldest</option>
          <option value={['comment_count', 'asc']}>Most Commented</option>
          <option value={['comment_count', 'desc']}>Least Commented</option>
          <option value={['votes', 'asc']}>Highest Votes</option>
          <option value={['votes', 'desc']}>Lowest Votes</option>
        </select>
      </div>
    );
  }
}

export default SortBy;
