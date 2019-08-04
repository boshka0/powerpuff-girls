import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import get from 'lodash/get';

import { loadEpisode } from '../../actions/episode';
import {
  episodesSelector,
  episodeSelector,
  episodeLoadingSelector,
  episodeErrorSelector
} from '../../selectors';
import { defaultImg } from '../../utils/defaultValues';

import Loader from '../loader';
import ErrorComponent from '../error';

import './episode-page.scss';
import BackLink from '../back-home-link';

const blockName = 'episode';
const cardName = `${blockName}-card`;

const EpisodePage = ({
    episodes,
    episode,
    match: {
      params
    },
    loadEpisode,
    isEpisodeLoading,
    episodeError
}) => {
  useEffect(() => {
    if (!episodes.length) loadEpisode();
  }, [loadEpisode, episodes.length, params.id]);

  const info = find(episodes, { id: +params.id }) || episode || {};
  const imageSrc = get(info, 'image.medium', defaultImg);

  return isEpisodeLoading && !episodes.length ? (
    <Loader />
  ) : (
    <div className={blockName}>
      <BackLink />
      {episodeError ? (
        <ErrorComponent block="episode description" />
      ) : (
        <div className={cardName}>
          <p>
            Season {info.season}. Episode {info.number}
          </p>
          <h1 className={`${cardName}-heading`}>{info.name}</h1>
          <div className={`${cardName}-container`}>
            <img
              className={`${cardName}-image`}
              alt={info.name}
              src={imageSrc}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: info.summary
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

EpisodePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    })
  }),
  episodes: PropTypes.arrayOf(PropTypes.shape),
  episode: PropTypes.shape({
    number: PropTypes.number,
    season: PropTypes.number,
  }),
  isEpisodeLoading: PropTypes.bool,
  loadEpisode: PropTypes.func,
  episodeError: PropTypes.string
};

const ConnectedEpisodePage = connect(
  state => ({
    episode: episodeSelector(state),
    episodes: episodesSelector(state),
    isEpisodeLoading: episodeLoadingSelector(state),
    episodeError: episodeErrorSelector(state)
  }),
  (dispatch, ownProps) => ({
    loadEpisode: () => dispatch(loadEpisode(ownProps.match.params.id))
  })
)(EpisodePage);

export default ConnectedEpisodePage;
