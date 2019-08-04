import get from 'lodash/get';

export const episodesSelector = state => get(state, 'episodes.data', []);
export const episodesLoadingSelector = state => get(state, 'episodes.loading', true);
export const episodesErrorSelector = state => get(state, 'episodes.error', null);

export const showSelector = state => get(state, 'show.data', {});
export const showLoadingSelector = state => get(state, 'show.loading', true);
export const showErrorSelector = state => get(state, 'show.error', null);

export const episodeSelector = state => get(state, 'episode.data');
export const episodeLoadingSelector = state => get(state, 'episode.loading', true);
export const episodeErrorSelector = state => get(state, 'episode.error', null);
