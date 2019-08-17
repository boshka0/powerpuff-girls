export const episodesSelector = state => state.episodes && state.episodes.data || [];
export const episodesLoadingSelector = state => state.episodes && state.episodes.loading;
export const episodesErrorSelector = state => state.episodes && state.episodes.error || null;

export const showSelector = state => state.show && state.show.data || {};
export const showLoadingSelector = state => state.show && state.show.loading;
export const showErrorSelector = state => state.show && state.show.error || null;

export const episodeSelector = state => state.episode && state.episode.data || {};
export const episodeLoadingSelector = state => state.episode && state.episode.loading;
export const episodeErrorSelector = state => state.episode && state.episode.error || null;
