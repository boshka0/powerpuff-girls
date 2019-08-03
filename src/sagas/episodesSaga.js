import { takeEvery, call, put } from 'redux-saga/effects';

import { setEpisodes, setEpisodesError } from '../actions/episodes';
import { EPISODES } from '../constants';
import { fetchEpisodes } from '../api';

function* handleEpisodesLoad() {
  try {
    const episodes = yield call(fetchEpisodes);
    yield put(setEpisodes(episodes));
  } catch (error) {
    yield put(setEpisodesError(error.toString()));
  }
}

export default function* watchEpisodesLoad() {
  yield takeEvery(EPISODES.LOAD, handleEpisodesLoad);
}
