import { SHOW } from '../constants';

export const loadShow = () => ({
  type: SHOW.LOAD,
});

export const setShow = episode => ({
  type: SHOW.LOAD_SUCCESS,
  payload: episode,
});

export const setShowError = error => ({
  type: SHOW.LOAD_FAIL,
  payload: error,
});
