/**
 * Marry up the Hello component with redux.
 * The pattern in this file is textbook redux
 */

import { connect } from 'react-redux';
import Hello from '../components/Hello';

function mapStateToProps(state) {
  return {
    hellofalcor: state.hello.hellofalcor,
    helloagain: state.hello.helloagain
  };
}

const HelloPage = connect(mapStateToProps)(Hello);

// A hint to help the server do the initial rendering of this component
// we use this data to dig into Falcor and populate an initial store for the
// server side render, as well as send that data to the client as its initial
// state as well
HelloPage.serverFalcorPaths = [
  { namespace: 'hello', paths: [['hellofalcor'], ['helloagain']] }
];

export default HelloPage;
