import { createStore } from 'redux';

import rootReducer from './reducers';

const debug = () => (
  process.env.NODE_ENV && process.env.NODE_ENV === 'development'
  /* @ts-ignore */
  // eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  rootReducer,
  debug(),
);

export default store;
