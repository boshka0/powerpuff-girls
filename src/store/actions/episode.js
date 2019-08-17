import { EPISODE } from '../constants';

export const loadEpisode = id => ({
  type: EPISODE.LOAD,
  payload: id,
});

export const setEpisode = episode => ({
  type: EPISODE.LOAD_SUCCESS,
  payload: episode,
});

export const setEpisodeError = error => ({
  type: EPISODE.LOAD_FAIL,
  payload: error,
});
