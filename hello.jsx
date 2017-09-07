// @ts-check

import * as React from 'react';

/** @augments {React.Component<{baz: string}, any>} */
export class Hello extends React.Component {
    render() {
        return <div>{this.props.baz}</div>;
    }
}
