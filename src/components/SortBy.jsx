/** @format */

import React, { Component } from 'react';

class SortBy extends Component {
  handleChange = event => {
    const queries = {
      Oldest: { sort_by: 'created_at', order: 'desc' },
      Newest: { sort_by: 'created_at', order: 'asc' },
      Most_Commented: { sort_by: 'comment_count', order: 'asc' },
      Least_Commented: { sort_by: 'comment_count', order: 'desc' },
      Highest_Votes: { sort_by: 'votes', order: 'asc' },
      Lowest_Votes: { sort_by: 'votes', order: 'desc' }
    };
    const queryArr = queries[event.target.value];
    this.props.handleQuery(queryArr, event.target.value);
  };

  render() {
    const defaultValue = this.props.queryValue || 'Newest';
    return (
      <div>
        SortBy:
        <form>
          <select defaultValue={defaultValue} onChange={this.handleChange}>
            <option value={'Newest'}>Newest</option>
            <option value={'Oldest'}>Oldest</option>
            <option value={'Most_Commented'}>Most Commented</option>
            <option value={'Least_Commented'}>Least Commented</option>
            <option value={'Highest_Votes'}>Highest Votes</option>
            <option value={'Lowest_Votes'}>Lowest Votes</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SortBy;
