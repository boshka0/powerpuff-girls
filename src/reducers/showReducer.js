import { SHOW } from '../constants';

const showReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW.LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SHOW.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case SHOW.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default showReducer;
