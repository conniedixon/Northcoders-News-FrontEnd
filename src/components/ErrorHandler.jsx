/** @format */

import React from 'react';
import TopArticles from './TopArticles';

const ErrorHandler = props => {
  return (
    <div>
      <h4>ERROR: {props.error.status}</h4>
      Oops, this page can't be loaded because the {props.error.data.msg}! Want
      to try these top trending articles instead?
      <TopArticles />
    </div>
  );
};

export default ErrorHandler;
