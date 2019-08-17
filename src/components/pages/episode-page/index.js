import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadEpisode } from '../../../store/actions/episode';
import {
  episodesSelector,
  episodeSelector,
  episodeLoadingSelector,
  episodeErrorSelector
} from '../../../store/selectors';
import { defaultImg } from '../../../utils/defaultValues';

import Loader from '../../common-components/loader';
import ErrorComponent from '../../common-components/error';

import './episode-page.scss';
import BackLink from '../../common-components/back-home-link';

const blockName = 'episode';
const cardName = `${blockName}-card`;

const EpisodePage = ({
    episodes,
    episode,
    match: {
      params
    },
    loadEpisode,
    isEpisodeLoading = true,
    episodeError
}) => {
  useEffect(() => {
    if (!episodes.length) loadEpisode();
  }, [loadEpisode, episodes.length, params.id]);

  const episodeInfo = episodes.find(episode => episode.id === +params.id) || episode || {};
  const imageObj = episodeInfo.image;

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
            Season {episodeInfo.season}. Episode {episodeInfo.number}
          </p>
          <h1 className={`${cardName}__heading`}>{episodeInfo.name}</h1>
          <div className={`${cardName}__container`}>
            <img
              className={`${cardName}__image`}
              alt={episodeInfo.name}
              src={imageObj ? imageObj.medium : defaultImg}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: episodeInfo.summary
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
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.shape({
      medium: PropTypes.string,
      original: PropTypes.string
    }),
    name: PropTypes.string,
    number: PropTypes.number,
    season: PropTypes.number,
    summary: PropTypes.string,
  })),
  episode: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.shape({
      medium: PropTypes.string,
      original: PropTypes.string
    }),
    name: PropTypes.string,
    number: PropTypes.number,
    season: PropTypes.number,
    summary: PropTypes.string,
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
