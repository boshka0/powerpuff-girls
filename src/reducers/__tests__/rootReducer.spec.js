import { createStore } from 'redux';
import rootReducer from '../index';

import episodesReducer from '../episodesReducer';
import showReducer from '../showReducer';
import { SHOW, EPISODES } from '../../constants';

const store = createStore(rootReducer);

test('rootReducer should return empty state when no action dispatched', () => {
  expect(store.getState().episodes).toEqual(episodesReducer(undefined, {}));
  expect(store.getState().show).toEqual(showReducer(undefined, {}));
});

const showSuccessAction = {
  type: SHOW.LOAD_SUCCESS,
  payload: { info: 'some info' }
};

const episodesFailedAction = {
  type: EPISODES.LOAD_FAIL,
  payload: 'API call failed'
};

test('rootReducer should return correct state after action dispatched', () => {
  store.dispatch(showSuccessAction);
  store.dispatch(episodesFailedAction);
  expect(store.getState().show.data).toEqual(showSuccessAction.payload);
  expect(store.getState().show.error).toEqual(null);
  expect(store.getState().show.loading).toEqual(false);
  expect(store.getState().episodes.data).toEqual(undefined);
  expect(store.getState().episodes.error).toEqual(episodesFailedAction.payload);
  expect(store.getState().episodes.loading).toEqual(false);
  expect(store.getState().show).toEqual(showReducer(undefined, showSuccessAction));
  expect(store.getState().episodes).toEqual(episodesReducer(undefined, episodesFailedAction));
});
