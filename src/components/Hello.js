import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Hello extends Component {
  static propTypes = {
    hellofalcor: PropTypes.string.isRequired,
    helloagain: PropTypes.string.isRequired
  }

  render() {
    const { hellofalcor, helloagain } = this.props;

    return (
      <div>
        <div>{hellofalcor}</div>
        <div>{helloagain}</div>
        <Link to="/another">Another</Link>
      </div>
    );
  }
}
