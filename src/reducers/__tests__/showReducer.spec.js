import { createStore } from 'redux';

import showReducer from '../showReducer';
import { SHOW } from '../../constants';

const store = createStore(showReducer);

test('showReducer should return empty state when no action dispatched', () => {
  expect(store.getState()).toEqual({});
});

const loadAction = {
  type: SHOW.LOAD,
};

test('showReducer should return correct state after load action dispatched', () => {
  store.dispatch(loadAction);
  expect(store.getState().data).toEqual(undefined);
  expect(store.getState().error).toEqual(null);
  expect(store.getState().loading).toEqual(true);
});

const successAction = {
  type: SHOW.LOAD_SUCCESS,
  payload: {
    info: 'some info'
  }
};

test('showReducer should return correct state after success action dispatched', () => {
  store.dispatch(successAction);
  expect(store.getState().data).toEqual(successAction.payload);
  expect(store.getState().error).toEqual(null);
  expect(store.getState().loading).toEqual(false);
});

const failedAction = {
  type: SHOW.LOAD_FAIL,
  payload: 'API call failed'
};

test('showReducer should return correct state after failed action dispatched', () => {
  store.dispatch(failedAction);
  expect(store.getState().error).toEqual(failedAction.payload);
  expect(store.getState().loading).toEqual(false);
});

const unknownAction = {
  type: 'UNKNOWN',
};

test('showReducer should return state by default', () => {
  store.dispatch(unknownAction);
  expect(store.getState().data).toEqual(successAction.payload);
});
