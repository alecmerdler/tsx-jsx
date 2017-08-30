import * as React from 'react';

/** @augments {React.Component<object, object>} */
export class Hello extends React.Component {
  render() {
    return <div>{this.props.baz}</div>;
  }
}
