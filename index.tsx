import * as React from 'react';
import { Hello } from './hello';

export const FooBar = (props: FooBarProps) => {
  return <Hello baz={null} />;
};

export type FooBarProps = {foo: string};
