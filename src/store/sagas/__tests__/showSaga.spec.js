import { runSaga } from 'redux-saga';

import { handleShowLoad } from '../showSaga';
import fetchApi from '../../api';
import {
  setShow,
  setShowError
} from '../../actions/show';

jest.mock('../../api', () => jest.fn());

afterEach(() => {
  jest.clearAllMocks();
});

test('should load and handle show in case of success', async () => {
  const dispatchedActions = [];

  const mockedShow = { showInfo: 'smth' };
  fetchApi.mockImplementation(() => Promise.resolve(mockedShow));

  const fakeStore = {
    dispatch: action => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, handleShowLoad).done;

  expect(fetchApi).toHaveBeenCalledTimes(1);
  expect(dispatchedActions).toContainEqual(setShow(mockedShow));
});

test('should handle show load errors in case of failure', async () => {
  const dispatchedActions = [];

  const error = 'API server is down';
  fetchApi.mockImplementation(() => Promise.reject(error));

  const fakeStore = {
    dispatch: action => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, handleShowLoad).done;

  expect(fetchApi).toHaveBeenCalledTimes(1);
  expect(dispatchedActions).toContainEqual(setShowError(error));
});
