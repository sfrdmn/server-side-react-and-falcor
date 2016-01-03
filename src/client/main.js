import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const history = createBrowserHistory();

const store = createStore(rootReducer, window._serverData);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
