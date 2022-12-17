import React from 'react';
import ReactDOM from 'react-dom';
import {add, sub, mult, div } from './Calc';
ReactDOM.render(
  <>
  <ul>
    <li>The sum of two number is{add(40,4)}</li>
    <li> {sub(40,4)}</li>
    <li> {mult(40,4)}</li>
    <li> {div(40,3)}</li>
  </ul>
  </>,
  document.getElementById('root')
);