import { EPISODE } from '../constants';

const episodeReducer = (state = {}, action) => {
  switch (action.type) {
    case EPISODE.LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EPISODE.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case EPISODE.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default episodeReducer;
