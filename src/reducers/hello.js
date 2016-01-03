const initialState = {
  // we should never see this, as the Falcor data should take over
  // if we do see this, there is a bug somewhere...
  hellofalcor: 'hello from initial state'
};

/**
 * A simple dummy reducer that doesn't actually do anything.
 * This enables usage of redux's combineReducers, and enables the demo
 * to more closely match a real app
 */
export default function hello(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
