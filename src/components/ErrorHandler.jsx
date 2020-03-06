/** @format */

import React from 'react';
import TopArticles from './TopArticles';

const ErrorHandler = props => {
  return (
    <div>
      <h4>ERROR: {props.status}</h4>
      Oops, {props.msg}! Want to try these top trending articles instead?
      <TopArticles />
    </div>
  );
};

export default ErrorHandler;
