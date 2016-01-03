import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Another extends Component {
  render() {
    return (
      <div>
        <div>hello from another component</div>
        <Link to="/">Hello</Link>
      </div>
    );
  }
}
