const API_ENDPOINTS = {
  EPISODE: 'http://api.tvmaze.com/episodes/',
  EPISODES: 'http://api.tvmaze.com/shows/6771/episodes',
  SHOW: 'http://api.tvmaze.com/shows/6771'
};

const EPISODE = {
  LOAD: 'EPISODE_LOAD',
  LOAD_SUCCESS: 'EPISODE_LOAD_SUCCESS',
  LOAD_FAIL: 'EPISODE_LOAD_FAIL',
};

const EPISODES = {
  LOAD: 'EPISODES_LOAD',
  LOAD_SUCCESS: 'EPISODES_LOAD_SUCCESS',
  LOAD_FAIL: 'EPISODES_LOAD_FAIL'
};

const SHOW = {
  LOAD: 'SHOW_LOAD',
  LOAD_SUCCESS: 'SHOW_LOAD_SUCCESS',
  LOAD_FAIL: 'SHOW_LOAD_FAIL'
};

export {
  EPISODE,
  EPISODES,
  SHOW,
  API_ENDPOINTS
};
