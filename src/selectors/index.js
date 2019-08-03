import get from 'lodash/get';

export const episodesSelector = state => get(state, 'episodes.data', []);
export const episodesLoadingSelector = state => get(state, 'episodes.loading');

export const showSelector = state => get(state, 'show.data', {});
export const showLoadingSelector = state => get(state, 'show.loading');

export const episodeSelector = state => get(state, 'episode.data');
export const episodeLoadingSelector = state => get(state, 'episode.loading');
