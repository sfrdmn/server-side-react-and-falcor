import http from 'http';
import path from 'path';
import Express from 'express';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import * as history from 'history';
import routes from '../routes';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import getFalcorDataForComponents from './falcor/getFalcorDataForComponents';

const app = new Express();
const server = new http.Server(app);

app.use(Express.static(path.join(__dirname, '..', 'static')));
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use((req, res, next) => {
  const location = history.createLocation(req.path);
  match({
    routes,
    location
  }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return next(err);
    }

    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (!renderProps) {
      res.status(404).send('Not found');
    } else {
      getFalcorDataForComponents(renderProps.components).then(storeData => {
        const store = createStore(rootReducer, storeData);
        res.send(
          `<!DOCTYPE html>
          <html>
          <body>
            <div id="app">${renderToString(
              <Provider store={store}>
                <RoutingContext {...renderProps}/>
              </Provider>
            )}</div>
          </body>
          <script type="text/javascript">window._serverData = ${JSON.stringify(storeData)}</script>
          <script type="text/javascript" src="js/bundle.js" charset="utf-8"></script>
          </html>`
        );
      });
    }
  });
});

const port = process.env.PORT || 8000;
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  }

  console.info('Visit http://localhost:%s in a browser to view the demo.', port);
});
