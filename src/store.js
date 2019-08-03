import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import infoReducer from './reducers';

export default createStore(
  infoReducer,
  {},
  applyMiddleware(thunk)
);
