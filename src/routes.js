import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HelloPage from './containers/HelloPage';
import Another from './components/Another';

export default (
  <Route path="/">
    <IndexRoute component={HelloPage} />
    <Route path="/another" component={Another} />
  </Route>
);
