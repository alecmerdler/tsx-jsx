// @ts-check

import * as React from 'react';
import { render } from 'react-dom';

import { FooBar, HelloEnhanced } from './index';

/** 
 * @param {{version: string}} props 
 * @returns {React.ReactElement}
 */
export const App = (props) => (
  <div>
    <FooBar foo="bar" />
    <HelloEnhanced baz="bar" />
  </div>
);

render(<App version="JSX" />, document.getElementById('app'));
