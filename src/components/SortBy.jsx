/** @format */

import React, { Component } from 'react';

class SortBy extends Component {
  render() {
    return (
      <div>
        <select>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
        <select>
          <option>Most Commented On</option>
          <option>Least Commented On</option>
        </select>
        <select>
          <option>Highest Voted</option>
          <option>Lowest Voted</option>
        </select>
      </div>
    );
  }
}

export default SortBy;
