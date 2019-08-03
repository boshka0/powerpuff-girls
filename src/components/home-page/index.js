import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import get from 'lodash/get';

import {
  episodesSelector,
  showSelector,
  episodesLoadingSelector,
  showLoadingSelector
} from '../../selectors';
import { loadEpisodes } from '../../actions/episodes';
import { loadShow } from '../../actions/show';
import EpisodePreview from './episode-preview';
import Loader from '../loader';
import './home-page.scss';

const blockName = 'show';

const HomePage = ({
  episodes,
  show,
  loadEpisodes,
  loadShow,
  isLoadingEpisodes = true,
  isLoadingShow = true
}) => {
  useEffect(() => {
    loadEpisodes();
    loadShow();
  }, [loadEpisodes, loadShow]);

  const showImageSrc = get(show, 'image.medium', '');
  const isLoading = isLoadingEpisodes || isLoadingShow;

  return isLoading ? <Loader /> : (
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
  isLoadingEpisodes: PropTypes.bool,
  isLoadingShow: PropTypes.bool,
  loadEpisodes: PropTypes.func,
  loadShow: PropTypes.func,
  episodes: PropTypes.arrayOf(PropTypes.object),
  show: PropTypes.object,
};

export default connect(
  state => ({
    episodes: episodesSelector(state),
    show: showSelector(state),
    isLoadingEpisodes: episodesLoadingSelector(state),
    isLoadingShow: showLoadingSelector(state)
  }),
  dispatch => ({
    loadEpisodes: () => dispatch(loadEpisodes()),
    loadShow: () => dispatch(loadShow())
  })
)(HomePage);
