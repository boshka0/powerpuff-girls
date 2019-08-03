import { combineReducers } from "redux";

import episodeReducer from './episodeReducer';
import episodesReducer from './episodesReducer';
import showReducer from './showReducer';

const rootReducer = combineReducers({
  episode: episodeReducer,
  episodes: episodesReducer,
  show: showReducer,
});

export default rootReducer;
