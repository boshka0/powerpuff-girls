import { takeEvery, call, put } from 'redux-saga/effects';

import { setEpisode, setEpisodeError } from '../actions/episode';
import { EPISODE, API_ENDPOINTS } from '../constants';
import fetchApi from '../api';

function* handleEpisodeLoad(action) {
  try {
    const { payload: id } = action;
    const episode = yield call(fetchApi, `${API_ENDPOINTS.EPISODE}${id}`);
    yield put(setEpisode(episode));
  } catch (error) {
    yield put(setEpisodeError(error.toString()));
  }
}

export default function* watchEpisodesLoad() {
  yield takeEvery(EPISODE.LOAD, handleEpisodeLoad);
}
