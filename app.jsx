// @ts-check

import * as React from 'react';
import { FooBar, HelloEnhanced } from './index';

/** @type {({version: string}) => JSX.Element} */
export const App = (props) => (
  <FooBar>
    <HelloEnhanced />
  </FooBar>
);
