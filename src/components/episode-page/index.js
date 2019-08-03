import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import find from 'lodash/find';
import get from 'lodash/get';

import { getEpisode } from '../../thunks';
import { defaultImg } from '../../utils/defaultValues';

import './episode-page.scss';

const blockName = 'episode';
const cardName = `${blockName}-card`;

const EpisodePage = ({ episodes = [], episode = {}, fetchEpisodeInfo, match: { params } }) => {
  useEffect(() => {
    if (!episodes.length) fetchEpisodeInfo(params.id);
  }, []);

  const info = find(episodes, { id: +params.id }) || episode;
  const imageSrc = get(info, 'image.medium', defaultImg);

  return (
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
  fetchEpisodeInfo: PropTypes.func,
};

export default connect(
  state => ({
    episode: state.episode,
    episodes: state.episodes,
  }),
  dispatch => ({
    fetchEpisodeInfo: getEpisode(dispatch),
  })
)(EpisodePage);
