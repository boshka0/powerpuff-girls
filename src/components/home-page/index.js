import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import get from 'lodash/get';

import { getShow, getAllEpisodes } from '../../thunks';

import EpisodePreview from './episode-preview';
import './home-page.scss';

const blockName = 'show';

const HomePage = ({ fetchShowInfo, fetchEpisodesInfo, episodes = [], show = {} }) => {
  useEffect(() => {
    fetchShowInfo();
    fetchEpisodesInfo();
  }, []);

  const showImageSrc = get(show, 'image.medium', '');

  return (
    <div className={blockName}>
      <h1 className={`${blockName}-title`}>{show.name}</h1>
      <div className={`${blockName}-info`}>
        <img
          alt={show.name}
          src={showImageSrc}
          className={`${blockName}-image`}
        />
        <div
          className={`${blockName}-description`}
          dangerouslySetInnerHTML={{
          __html: show.summary,
          }}
        />
      </div>
      <div className={`${blockName}-episodes`}>
        <h2 className={`${blockName}-episodes-title`}>Episode list:</h2>
        <div className={`${blockName}-episodes-container`}>
          { episodes.map((episode, index) => (
            <Link
              key={index}
              to={`/episodes/${episode.id}`}
            >
              <EpisodePreview
                episodeInfo={episode}
              />
            </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  fetchShowInfo: PropTypes.func,
  fetchEpisodesInfo: PropTypes.func,
  episodes: PropTypes.arrayOf(PropTypes.object),
  show: PropTypes.object,
};

export default connect(
  (state) => ({
    episodes: state.episodes,
    show: state.show,
  }),
  (dispatch) => ({
    fetchShowInfo: getShow(dispatch),
    fetchEpisodesInfo: getAllEpisodes(dispatch),
  })
)(HomePage);
