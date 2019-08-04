import { runSaga } from 'redux-saga';

import { handleShowLoad } from '../showSaga';
import * as api from '../../api';
import {
  setShow,
  setShowError
} from '../../actions/show';

test('should load and handle show in case of success', async () => {
  const dispatchedActions = [];

  const mockedShow = { showInfo: 'smth' };
  api.fetchShow = jest.fn(() => Promise.resolve(mockedShow));

  const fakeStore = {
    dispatch: action => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, handleShowLoad).done;

  expect(api.fetchShow.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setShow(mockedShow));
});

test('should handle show load errors in case of failure', async () => {
  const dispatchedActions = [];

  const error = 'API server is down';
  api.fetchShow = jest.fn(() => Promise.reject(error));

  const fakeStore = {
    dispatch: action => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, handleShowLoad).done;

  expect(api.fetchShow.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setShowError(error));
});
