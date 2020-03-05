/** @format */

import React from 'react';
import TopArticles from './TopArticles';

const ErrorHandler = props => {
  console.log(props, '<-- props heere');
  return (
    <div>
      <h4>ERROR: {props.status}</h4>
      Oops, {props.msg}! Want to try these top trending articles instead?
      <TopArticles />
    </div>
  );
};

export default ErrorHandler;

//set focus and link to component
