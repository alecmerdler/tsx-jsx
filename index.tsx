import * as React from 'react';
import { Hello } from './hello';

export const FooBar = (props) => {
  return <Hello baz={null}>
    <div />
  </Hello>;
};