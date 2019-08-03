import { setShow, setAllEpisodes, setEpisode } from '../actions';
import { ERROR } from '../constants';

export const getAllEpisodes = dispatch => () => {
  fetch('http://api.tvmaze.com/shows/6771/episodes')
    .then(res => res.json())
    .then(data => dispatch(setAllEpisodes(data)))
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }));
};

export const getShow = dispatch => () => {
  fetch('http://api.tvmaze.com/shows/6771')
    .then(res => res.json())
    .then(data => dispatch(setShow(data)))
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }));
};

export const getEpisode = dispatch => (id) => {
  fetch(`http://api.tvmaze.com/episodes/${id}`)
    .then(res => res.json())
    .then(data => dispatch(setEpisode(data)))
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }));
}
