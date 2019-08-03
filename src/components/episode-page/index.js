import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import get from 'lodash/get';

import { loadEpisode } from '../../actions/episode';
import {
  episodesSelector,
  episodeSelector,
  episodeLoadingSelector
} from '../../selectors';
import { defaultImg } from '../../utils/defaultValues';

import Loader from '../loader';

import './episode-page.scss';

const blockName = 'episode';
const cardName = `${blockName}-card`;

const EpisodePage = ({
    episodes,
    episode,
    match: {
      params
    },
    loadEpisode,
    isEpisodeLoading = true
}) => {
  useEffect(() => {
    if (!episodes.length) loadEpisode();
  }, [loadEpisode, episodes.length, params.id]);

  const info = find(episodes, { id: +params.id }) || episode || {};
  const imageSrc = get(info, 'image.medium', defaultImg);

  return isEpisodeLoading && !episodes.length ? <Loader /> : (
    <div className={blockName}>
      <Link
        className={`${blockName}-back-link`}
        to='/'
      >
        BACK
      </Link>
      <div className={cardName}>
        <p>Season {info.season}. Episode {info.number}</p>
        <h1 className={`${cardName}-heading`}>{info.name}</h1>
        <div className={`${cardName}-container`}>
          <img
            className={`${cardName}-image`}
            alt={info.name}
            src={imageSrc}
          />
          <div dangerouslySetInnerHTML={{
            __html: info.summary
          }}/>
        </div>
      </div>
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
};

export default connect(
  state => ({
    episode: episodeSelector(state),
    episodes: episodesSelector(state),
    isEpisodeLoading: episodeLoadingSelector(state)
  }),
  (dispatch, ownProps) => ({
    loadEpisode: () => dispatch(loadEpisode(ownProps.match.params.id))
  })
)(EpisodePage);
