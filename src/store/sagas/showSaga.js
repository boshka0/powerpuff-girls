import { takeEvery, call, put } from 'redux-saga/effects';

import { setShow, setShowError } from '../actions/show';
import { SHOW, API_ENDPOINTS } from '../constants';
import fetchApi from '../api';

export function* handleShowLoad() {
  try {
    const show = yield call(fetchApi, API_ENDPOINTS.SHOW);
    yield put(setShow(show));
  } catch (error) {
    yield put(setShowError(error.toString()));
  }
}

export default function* watchShowLoad() {
  yield takeEvery(SHOW.LOAD, handleShowLoad);
}
