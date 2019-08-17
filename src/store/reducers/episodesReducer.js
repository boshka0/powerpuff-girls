import { EPISODES } from '../constants';

const episodesReducer = (state = {}, action) => {
  switch (action.type) {
    case EPISODES.LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EPISODES.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case EPISODES.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default episodesReducer;
