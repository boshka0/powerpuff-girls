import { takeEvery, call, put } from 'redux-saga/effects';

import { setShow, setShowError } from '../actions/show';
import { SHOW } from '../constants';
import { fetchShow } from '../api';

function* handleShowLoad() {
  try {
    const show = yield call(fetchShow);
    yield put(setShow(show));
  } catch (error) {
    yield put(setShowError(error.toString()));
  }
}

export default function* watchShowLoad() {
  yield takeEvery(SHOW.LOAD, handleShowLoad);
}
