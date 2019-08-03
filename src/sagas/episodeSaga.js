import { takeEvery, call, put } from 'redux-saga/effects';

import { setEpisode, setEpisodeError } from '../actions/episode';
import { EPISODE } from '../constants';
import { fetchEpisode } from '../api';

function* handleEpisodeLoad(action) {
  try {
    const { payload: id } = action;
    const episode = yield call(fetchEpisode, id);
    yield put(setEpisode(episode));
  } catch (error) {
    yield put(setEpisodeError(error.toString()));
  }
}

export default function* watchEpisodesLoad() {
  yield takeEvery(EPISODE.LOAD, handleEpisodeLoad);
}
