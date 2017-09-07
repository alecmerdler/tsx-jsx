import * as React from 'react';
import { render } from 'react-dom';
import { App } from './app';

export const MyApp = (props) => (
    <App version="TSX" />
);

render(<MyApp />, document.getElementById('app'));
