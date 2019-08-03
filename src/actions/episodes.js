import { EPISODES } from '../constants';

export const loadEpisodes = () => ({
  type: EPISODES.LOAD,
});

export const setEpisodes = episode => ({
  type: EPISODES.LOAD_SUCCESS,
  payload: episode,
});

export const setEpisodesError = error => ({
  type: EPISODES.LOAD_FAIL,
  payload: error,
});
