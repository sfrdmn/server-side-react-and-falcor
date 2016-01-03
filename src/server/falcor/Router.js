import Router from 'falcor-router';

export default Router.createClass([
  {
    route: 'hellofalcor',
    get(pathSet) {
      return Promise.resolve({ path: [pathSet[0]], value: 'hello from falcor' });
    }
  },
  {
    route: 'helloagain',
    get(pathSet) {
      return Promise.resolve({ path: [pathSet[0]], value: 'hello again from falcor' });
    }
  }
]);
