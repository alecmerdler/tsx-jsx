import * as React from 'react';
import { Hello } from './hello';

export const FooBar = (props: FooBarProps) => {
    return <Hello baz={null} />;
};

export class FizzBuzz extends React.Component<FizzBuzzProps> {
    render() {
        return <h1>{this.props.fizzbuzz}</h1>
    }
}

export class HelloEnhanced extends Hello {
    render() {
        return <h1>{this.props.baz}</h1>;
    }
}

export type FooBarProps = {foo: string};
export type FizzBuzzProps = {fizzbuzz: string};
