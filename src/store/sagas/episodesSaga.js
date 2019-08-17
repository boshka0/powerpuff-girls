import { takeEvery, call, put } from 'redux-saga/effects';

import { setEpisodes, setEpisodesError } from '../actions/episodes';
import { EPISODES, API_ENDPOINTS } from '../constants';
import fetchApi from '../api';

function* handleEpisodesLoad() {
  try {
    const episodes = yield call(fetchApi, API_ENDPOINTS.EPISODES);
    yield put(setEpisodes(episodes));
  } catch (error) {
    yield put(setEpisodesError(error.toString()));
  }
}

export default function* watchEpisodesLoad() {
  yield takeEvery(EPISODES.LOAD, handleEpisodesLoad);
}
