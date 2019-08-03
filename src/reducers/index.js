import { SET_SHOW, SET_EPISODES, SET_EPISODE, ERROR } from '../constants';

const infoReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SHOW:
      return {
        ...state,
        show: action.payload,
      };
    case SET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };
    case SET_EPISODE:
      return {
        ...state,
        episode: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default infoReducer;
