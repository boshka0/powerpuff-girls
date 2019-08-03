import { SET_SHOW, SET_EPISODES, SET_EPISODE } from '../constants';

export const setAllEpisodes = episodes => ({
  type: SET_EPISODES,
  payload: episodes,
});

export const setShow = show => ({
  type: SET_SHOW,
  payload: show,
});

export const setEpisode = episode => ({
  type: SET_EPISODE,
  payload: episode,
});
