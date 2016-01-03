/**
 * This file is the heart of the demo, it takes a component, and grabs its
 * data from Falcor using the component's static serverFalcorPaths property.
 * See src/containers/HelloPage.js to see a component that does this
 */

import _ from 'lodash';
import FalcorRouter from './Router';
import { Model } from 'falcor';

function getNamespaceData(model, namespaceSpec) {
  return model.get(...namespaceSpec.paths).then(data => {
    return {
      [namespaceSpec.namespace]: data.json
    };
  });
}

function getComponentData(model, cmp) {
  if (cmp && cmp.serverFalcorPaths) {
    return cmp.serverFalcorPaths.map(getNamespaceData.bind(this, model));
  } else {
    return [Promise.resolve()];
  }
}

export default function getFalcorDataForComponents(components = []) {
  // by creating the model here, it will only get used for one request
  // this maintains the server being stateless
  const falcorRouter = new FalcorRouter();
  const model = new Model({ source: falcorRouter });

  // grab all the falcor paths the components are requesting into one large bag
  const falcorPaths = components.reduce((paths, cmp) => {
    if (cmp && cmp.serverFalcorPaths) {
      const cmpPaths = _.pluck(cmp.serverFalcorPaths, 'paths');
      return paths.concat(...cmpPaths);
    } else {
      return paths;
    }
  }, []);

  // blindly get all the needed data, we ignore the result because we are really
  // just populating the model's cache
  return model.get(...falcorPaths).then(() => {
    // and now that we have it (in the cache), sort it out into the namespaces the components specified
    // this enables the store to be populated the same as if the reducers and redux's combineReducers()
    // had assembled the data

    const componentPromises = components.map(getComponentData.bind(this, model));

    return Promise.all(_.flatten(componentPromises)).then(results => {
      return Object.assign.apply(Object, [{}, ...results]);
    });
  });
}
