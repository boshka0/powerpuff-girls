import { all } from 'redux-saga/effects';

import episodesSaga from './episodesSaga';
import episodeSaga from './episodeSaga';
import showSaga from './showSaga';

export default function* rootSaga() {
  yield all([episodesSaga(), episodeSaga(), showSaga()]);
}
